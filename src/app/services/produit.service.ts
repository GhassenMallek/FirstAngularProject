import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }
  infoProduit(){
    alert("my first service");
  }
}
