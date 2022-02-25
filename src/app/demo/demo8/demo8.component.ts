import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  leSalut : string = "Qu'est ce qu'on dit Fils ?";
  listeHobbies : string[] = ["Jeux-video", "tennis", "nourriture"];
  constructor() { }

  ngOnInit(): void {
  }
  afficher(txt:string){
    this.leSalut = txt
  }
}
