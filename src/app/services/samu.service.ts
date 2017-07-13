import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {
  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;


  }

  getMedia(id: number): number{
      let i= 0;
      let totalAtendidos = 0;
      for(let Dados of VALORES)
      {
          if(Dados.uf_id == id)
          {
            totalAtendidos += Dados.valor;
            i++;
          }
      }
      return (totalAtendidos/i);
    }

  getValores(id: number): Dados[]
  {
      let valores: Dados[]=[];
      for(let dados of VALORES)
      {
        if(dados.uf_id == id)
          {

            valores.push(dados);
          }

        }
        return valores;
    }


}
