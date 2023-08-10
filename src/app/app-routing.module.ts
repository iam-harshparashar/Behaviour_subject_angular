import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondhalfComponent } from './secondhalf/secondhalf.component';

const routes: Routes = [
   {path:'show', component:SecondhalfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
