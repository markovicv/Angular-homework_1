import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import {EditCompComponent} from './components/edit-comp/edit-comp.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import {FooterComponent} from './components/footer/footer.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'home',component:HomeComponent},
  {path:'groups',component:GroupsComponent},
  {path:'home/edit',component:EditCompComponent},
  {path: 'home/details', component:UserDetailsComponent},
  {path:'groups/members',component:GroupMembersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,HomeComponent,GroupsComponent,EditCompComponent,UserDetailsComponent,GroupMembersComponent]