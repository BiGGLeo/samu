import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }

  getPorID(id: number): UF
  {
    var uf: UF;
    for(let i of UFs)
    {
      if(i.id==id) return uf = i;
    }
  }





}
