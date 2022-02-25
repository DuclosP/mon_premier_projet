import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  monNombre : number= 5;
  placeholder : string = "tapez un chiffre"

  constructor() { }

  ngOnInit(): void {
  }

  changerValeur(){
    this.monNombre = 42;
  }
}
