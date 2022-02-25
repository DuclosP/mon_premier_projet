import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVariable : string = "Wesh alors";

  constructor() { }

  ngOnInit(): void {
  }

  changerLanguer() :void {
    this.maVariable = "Hy there";
  }

}
