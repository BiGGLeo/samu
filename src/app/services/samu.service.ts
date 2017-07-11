import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {
  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;


  }
  criarMaster(): Dados[]
  {
      let valores: Dados[]=[];
      for(let dados of VALORES)
      {
        if(dados.uf_id == 29)
          {
            
            valores.push(dados);
          }

        }
        return valores;
    }


}
