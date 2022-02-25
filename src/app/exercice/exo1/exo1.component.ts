import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {
  sec : number = 0;
  chrono : any;
  isTStarted : boolean = false;
  message : string = "Chronomètre"
  constructor() {
  }
  ngOnInit(): void {
  }
  start():void {
    if(this.isTStarted){
      this.message = "Chronomètre déjà lancé" 
    }else {
      this.chrono = setInterval(() => {
        this.sec += 1;
        this.isTStarted = true;
        this.message = "Chronomètre lancé" 
      } , 1000);
    }
  }
  pause():void {
    clearInterval(this.chrono);
    this.message = "Chronomètre en pause" 
    this.isTStarted = false;
  }
  reset():void {
    this.pause();
    this.sec = 0;
    this.message = "Chronomètre arrèté"
  }
}
