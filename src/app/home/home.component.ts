import { Component, OnInit } from '@angular/core';
import { cours } from '../models';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mycourses:cours[]=[ 
    {"id":1, "nom":"java","vh":10},
    {"id":1, "nom":"typescript","vh":15},
    {"id":1 ,"nom":"css","vh":4} 
  ];
  test:boolean=true;
  srcImage:string="data:image/jpeg;base64,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";
  public formation:string="full stack";
  public tab : string[]=["spring","git","data","scrum"];
  constructor(private produits:ProduitService) { 
    console.log("home constructor");
  }

  ngOnInit(): void {
    console.log("ngOnIni");
  }
info(){
  // alert(this.test);
  this.test=!this.test;
  this.produits.infoProduit();
}
}