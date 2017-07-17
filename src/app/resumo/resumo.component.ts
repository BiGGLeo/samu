import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'

import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service'

@Component({
  selector: 'resumo',
  templateUrl: './resumo.component.html',
  //SE DER FRESCURA RETIRE ESSA ANOTAÇÃO >>> styleUrls: ['./app.component.css'],
  providers:[UFService,SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    cabecalho =   '';
    id = 29;
    uf_id = '';
    area= '';
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

        //Tem que fazer esses 3 aqui

        this.title = this.ufService.getPorID(this.id).nome;
        this.uf_id = String(this.ufService.getPorID(this.id).id);
        this.area = String(this.ufService.getPorID(this.id).area);

        //Esse vai para detalhes  this.valores = this.samuService.getValores(this.id);

    }






    }
