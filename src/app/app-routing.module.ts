import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BioComponent } from './bio/bio.component';
import { MedeccComponent } from './medecc/medecc.component';
import { SaltonComponent } from './salton/salton.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'bio', component: BioComponent},
  {path: 'medecc', component: MedeccComponent}, 
  {path: 'salton', component: SaltonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
