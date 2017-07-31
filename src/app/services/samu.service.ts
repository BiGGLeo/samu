import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class SamuService {
  private api = 'api/VALORES';  // URL to web api

  constructor(private http: Http) {}

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.api)
    .toPromise()
    .then(response => response.json().data as Dados[])
    .catch(this.handleError);


  }

  private handleError(error: any): Promise<any> {
  console.error('Ops, algo está errado', error);
  return Promise.reject(error.message || error);
}

  getMedia(dados: Dados[]): number{
      let i= 0;
      let totalAtendidos = 0;
      /*for(let Dados of VALORES)
      {
          if(Dados.uf_id == id)
          {
            totalAtendidos += Dados.valor;
            i++;
          }
      }
      return Math.round(totalAtendidos/i);*/



      dados.forEach(dado => totalAtendidos+= dado.valor);
      return Math.round(totalAtendidos/dados.length)
    }


    /*getPorUFMunicipiosAtendidosPorEstado(uf:UF): Dados[]
    {
      var municipios: Dados[] = [];
      for(let i of VALORES)
      {
        if(i.uf_id == uf.id)
        {
            municipios.push(i);
        }
      }
      return municipios;
    }*/

    getPorUFMunicipiosAtendidosPorEstadoPromise (id:number): Promise<Dados[]>{

      return this.http.get(this.api)
        .toPromise()
        .then((response) =>{
          var municipios: Dados[] = [];
          for(let i of VALORES)
          {
            if(i.uf_id == id)
            {
                municipios.push(i);
            }
          }
          return municipios;
    })
}

}
