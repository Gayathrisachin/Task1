import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ListUserComponent } from './list-user/list-user.component';


const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'list',component:ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
