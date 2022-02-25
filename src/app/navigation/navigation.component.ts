import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor() { }
  liens:Link[] =[{
    title : "Demo",
    url : "/demo",
    children : [
      {title:"One way binding", url:"demo/demo1"},
      {title:"Two ways binding", url:"demo/demo2"},
      {title:"Event Binding", url:"demo/demo3"},
      {title:"Attribute Binding", url:"demo/demo4"},
      {title:"Pipes", url:"demo/demo5"},
      {title:"Component directive", url:"demo/demo6"},
      {title:"Structural directive", url:"demo/demo7"},
      {title:"Input & Output", url:"demo/demo8"},
      {title:"Services", url:"demo/demo9"},
      {title:"Formulaires", url:"demo/demo10"},
    ]
  }, 
  {
    title : "Exo",
    url : "/exo",
    children : [
      {title:"Chronomètre simple", url:"exo/exo1"},
      {title:"Panier simple", url:"exo/exo2"},
      {title:"Panier simple avec un service", url:"exo/exo3"},
      {title:"Les formulaiiiiires", url:"exo/exo4"},
    ]
  }]
  
  ngOnInit(): void {
    
  }
  toggle(index:number) {
    this.liens[index].isVisible = !this.liens[index].isVisible;
  }  

}

export class Link {
  constructor(public title:string, public url?:string,public children?:Link[],public isVisible?: boolean ){}
}
