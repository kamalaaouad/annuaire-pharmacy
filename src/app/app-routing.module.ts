import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PharmacieComponent } from './components/pharmacie/pharmacie.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'service',component:PharmacieComponent},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
