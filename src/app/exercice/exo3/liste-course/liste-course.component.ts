import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListeCourseService } from 'src/app/services/liste-course.service';
import { Article2 } from '../exo3.component';
@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.scss']
})
export class ListeCourseComponent implements OnInit {
  
  @Input() cart : Article2[] = [];
  @Input() quant : number = 1;
  
  @Output() delCart : EventEmitter<number>;
  constructor(private _listeCourse :ListeCourseService ) { 
    this.delCart = new EventEmitter<number>();
  }
  ngOnInit(): void {
    
  }
  addOne(i:number){
    this._listeCourse.addOneToQuant(i)
  }
  delOne(i:number){
    if(this._listeCourse.panier[i].quant > 1){
      this._listeCourse.removeOneToQuant(i)
    }
    
  }
  sendIndex(i:number) {
    this.delCart.emit(i)
  }
}

