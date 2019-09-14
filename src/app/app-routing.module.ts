import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports for the apps components 
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';

// paths to give functionality to the navigation bar 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign', component: SignComponent},
  { path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
