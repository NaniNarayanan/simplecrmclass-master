import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [{path:'',component:ListUsersComponent},
{path:'role',component:ListRolesComponent},
{path:'user',component:ListUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
