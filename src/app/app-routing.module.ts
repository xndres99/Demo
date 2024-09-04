import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pension1Component } from './Pensiones/pension1/pension1.component';
import { GratisComponent } from './SubPages/gratis/gratis.component';
import { NormalComponent } from './SubPages/normal/normal.component';
import { ProComponent } from './SubPages/pro/pro.component';

const routes: Routes = [
  {path:"",component:GratisComponent},
  {path:"normal",component:NormalComponent},
  {path:"pro",component:ProComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
