import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service';
import {AllService} from './services/all';

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service';
import {AllDados} from './types/allDados'

@Component({
  selector: 'all',
  templateUrl: './all.component.html',
  providers:[UFService,SamuService]
})
export class AllComponent implements OnInit {
    title = 'app';
    id = 29;
    uf_id = '';
    area= '';
    minha_UF: UF;
    valores: AllDados[];
    mediaAtendidos = 0;
    ufs : UF[];
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService, private allService: AllService)
    {

    }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();


        //Começa aqui, na real

        this.allService.getTudo().then( dados =>
        this.valores = dados);
}

    }






    
