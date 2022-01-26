import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedeccComponent } from './medecc/medecc.component';
import { SaltonComponent } from './salton/salton.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path: 'medecc', component: MedeccComponent}, 
  {path: 'salton', component: SaltonComponent},
  {path: 'third', component: ThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
