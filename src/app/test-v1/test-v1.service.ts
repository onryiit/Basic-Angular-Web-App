import { Injectable } from '@angular/core';
import { GelirGider } from './test-v1.model';


@Injectable({
  providedIn: 'root'
})
export class GelirGiderService {
  private gelirGiderler: GelirGider[] = [];

  constructor() { }

//   getGelirGiderler():Promise<any> {
//     return new Promise((resolve,reject)=>{
//         resolve(this.gelirGiderler)
//     reject})
//   }

getGelirGiderler(){
    return this.gelirGiderler
}
  addGelirGider(gelirGider: GelirGider): void {
    this.gelirGiderler.push(gelirGider);
  }

  // Diğer servis metodları (düzenleme, silme vb.)
}