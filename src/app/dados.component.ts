import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'dados',
  templateUrl: './dados.component.html',
  providers:[UFService,SamuService]
})
export class DadosComponent implements OnInit {
    title = 'app';
    id = 29;
    uf_id = '';
    area= '';
    minha_UF: UF;
    valores: Dados[];
    mediaAtendidos = 0;
    ufs : UF[];
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.samuService.getAllMunicipiosAtendidosPorEstado().then(dados_da_samu => this.dados_da_samu = dados_da_samu);

        //Começa aqui, na real
        this.minha_UF = this.ufService.getPorID(this.id);
        this.samuService.getPorUFMunicipiosAtendidosPorEstadoPromise(this.id).then(dados => this.valores = dados);

    }






    }
