import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { KeypeopleComponent } from './components/keypeople/keypeople.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'key-people', component: KeypeopleComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
