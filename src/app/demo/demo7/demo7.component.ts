import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  isVisible : boolean = false;

  listCourse : string[] = [];

  maVariable : string = "";
  constructor() { }

  ngOnInit(): void {
    this.listCourse = ["patate", "playstation 42", "call of duty morern close combat retro zero X DELUXE", "courgette", "chaussette"];
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
  


}
