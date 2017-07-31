import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UFService,SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    id = 29;
    uf_id = '';
    media= 0;
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

        this.title = this.ufService.getPorID(this.id).nome;


    }






    }
