import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {
  nom:string = "";
  prix?:number;
  img:string = "";

  panier: Article[] = [];

  constructor() { }
  
  ngOnInit(): void {
  }

  addToCart(): Article[] {
    let article = new Article(this.nom,  this.img,this.prix);
    this.panier.push(article);
    console.log(this.panier);
    return this.panier
  }
  delToCart(i:number){
    this.panier.splice(i, 1)
  }
}
export class Article {
  constructor(public name:string, public img:string, public price?:number){}
}
