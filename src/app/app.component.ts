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
    cabecalho = '';
    uf_id = '';
    area= '';
    mediaAtendidos = 0;
    anoQtdmunicipios: number[];
    ufs : UF[];
    dados_da_samu : Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.usarTitulo();
        this.criarDetail();
        this.criarMaster();
    }

    usarTitulo(): void{
      for(let uf of this.ufs){
        if (uf.id == 29) this.title = uf.nome;
      }

    }

    criarDetail(): void
    {
      for(let uf of this.ufs)
      {
        if(uf.id == 29)
        {
          this.uf_id = String(uf.id);
          this.area = String(uf.area);

        }
        let i= 0
        for(let Dados of this.dados_da_samu)
        {
            if(Dados.uf_id==29)
            {
              this.mediaAtendidos += Dados.valor;
              i++;
            }
        }
        this.mediaAtendidos = this.mediaAtendidos/i;
      }


    }
    criarMaster(): void
    {
        for(let Dados of this.dados_da_samu)
        {
          if(Dados.uf_id==29) this.anoQtdmunicipios.push(Dados);
        }

    }


}
