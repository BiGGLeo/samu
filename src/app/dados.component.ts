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
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();

        //Começa aqui, na real
        this.minha_UF = this.ufService.getPorID(this.id);
        this.valores = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);

    }






    }
