import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {
  maChaine : string = 'Hello les boys';
  maDate : Date = new Date();
  maTemp : number = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
