import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahreneitPipe } from '../pipes/to-fahreneit.pipe';
import { AjoutDuZeroPipe } from '../pipes/ajout-du-zero.pipe';
import { ToMinutsPipe } from '../pipes/to-minuts.pipe';
import { SecundsLeftPipe } from '../pipes/secunds-left.pipe';



@NgModule({
  declarations: [
    ToFahreneitPipe,
    AjoutDuZeroPipe,
    ToMinutsPipe,
    SecundsLeftPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahreneitPipe,
    AjoutDuZeroPipe,
    ToMinutsPipe,
    SecundsLeftPipe,
  ]
})
export class SharedModule { }
