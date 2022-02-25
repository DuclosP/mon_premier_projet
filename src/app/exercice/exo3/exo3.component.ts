import { Component, OnInit } from '@angular/core';
import { ListeCourseService } from 'src/app/services/liste-course.service';



@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  constructor(private _laListe : ListeCourseService) { }
  panier:Article2[] = [];  
  
  nom:string = "";
  prix:number = 0;
  img:string = "";
  nb:number = 1;

  ngOnInit(): void {
    this.panier = this._laListe.panier
  }

  add(){
    let product = new Article2(this.nom, this.img,this.nb, this.prix);
    this._laListe.addToCart(product) ;   
  }

  del(i:number){
    this._laListe.delToCart(i)
  }
}

export class Article2 {
  constructor(public name:string, public img:string,public quant:number, public price:number){}
}
