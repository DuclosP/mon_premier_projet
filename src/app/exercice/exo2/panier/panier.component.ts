import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../exo2.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  
  @Input() cart : Article[] = [];
  
  @Output() delCart : EventEmitter<number>;
  constructor() { 
    this.delCart = new EventEmitter<number>();
  }

  
  ngOnInit(): void {
    
  }

  sendIndex(i:number) {
    this.delCart.emit(i)
  }
}
