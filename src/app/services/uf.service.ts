import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Dados } from '../types/samu';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  constructor(private http: Http) {}
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

  getPorIDPromise(id: number): Promise<UF> {
    return this.http.get('/api/ufs')
    .toPromise()
    .then((response) => {
      let ufs = response.json().data as UF[];
      return ufs.find(uf => uf.id == id);
    });
}





}
