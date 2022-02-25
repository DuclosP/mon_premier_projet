import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {
  isItalic :boolean = false;
  isBold :boolean = false;
  size :boolean = false;

  isRed : boolean = false;

  currentStyles : any = "";
  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }
  setStyle(){
    this.currentStyles = {
      "font-weight" : this.isBold ? "bold" : "",
      "font-style" : this.isItalic ? "italic" : "",
      "font-size" : this.size ? "24px" : ""
    }
  }
  switchBold(){
    this.isBold =!this.isBold;
    this.setStyle();
  }
  switchItalic(){
    this.isItalic =!this.isItalic;
    this.setStyle();
  }
  switchSize(){
    this.size =!this.size;
    this.setStyle();
  }
  switchClass() {
    this.isRed =!this.isRed;
  }
}
