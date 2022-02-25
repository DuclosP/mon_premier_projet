import { Injectable } from '@angular/core';
import { Article2 } from '../exercice/exo3/exo3.component';

@Injectable({
  providedIn: 'root'
})
export class ListeCourseService {
  
  constructor() {}
  panier: Article2[] = [];
  
  ngOnInit(): void {
  }

  addToCart(article:Article2): Article2[] {
    this.panier.push(article);
    return this.panier
  }
  delToCart(i:number){
    this.panier.splice(i, 1)
  }
  addOneToQuant(i:number){
    this.panier[i].quant ++;
  }
  removeOneToQuant(i:number){
    this.panier[i].quant --;
  }
}
