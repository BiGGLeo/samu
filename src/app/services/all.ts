import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';
import { AllDados } from '../types/allDados';

import { UFService } from './uf.service';

@Injectable()

export class AllService {

  constructor(private ufService: UFService) { }

  getTudo(): AllDados[]{
    let todosDados: AllDados[] = [];
    for(let i of VALORES)
    {
      let dadoGenerico : AllDados = new AllDados();
      dadoGenerico.ano = i.ano;
      dadoGenerico.valor = i.valor;
      dadoGenerico.uf = this.ufService.getPorID(i.uf_id);
      todosDados.push(dadoGenerico);
    }
    return todosDados;
  }



}
