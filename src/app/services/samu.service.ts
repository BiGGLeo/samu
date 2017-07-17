import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

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
      return Math.round(totalAtendidos/i);
    }

    getPorUFMunicipiosAtendidosPorEstado(uf:UF): Dados[]
    {
      var municipios: Dados[] = []
      for(let i of VALORES)
      {
        if(i.uf_id == uf.id)
        {
            municipios.push(i);
        }
      }
      return municipios;
    }


}
