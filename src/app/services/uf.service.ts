import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }

getTitulo(id: number): string{
    for(let uf of UFs){
      if (uf.id == id) return uf.nome;
    }

  }

getID(id: number): string
  {
    for(let uf of UFs)
    {
      if(uf.id == id) return String(uf.id);
    }
  }

  getArea(id: number): string
  {
    for(let uf of UFs)
      {
        if(uf.id == id) return String(uf.area);
      }
  }




}
