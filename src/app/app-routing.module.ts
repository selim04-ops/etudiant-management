import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'etudiant-list', component: EtudiantListComponent },
  { path: 'add-etudiant', component: AddEtudiantComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
