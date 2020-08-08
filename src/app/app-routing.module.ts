import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './components/input-form/input-form/input-form.component';


const routes: Routes = [
  {path: 'inputform', component: InputFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
