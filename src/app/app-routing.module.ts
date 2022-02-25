import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  { path: 'demo', loadChildren : () => import('./demo/demo.module').then( m => m.DemoModule)},
  { path: 'exo', loadChildren : () => import('./exercice/exercice.module').then( m => m.ExerciceModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
