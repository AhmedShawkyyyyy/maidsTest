import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './userPanel/home/home.component';
import { UsersDetailsComponent } from './userPanel/home/usersDetails/usersDetails.component';
import { Error404Component } from './userPanel/error404/error404.component';
import { AddUserComponent } from './userPanel/home/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Maids | Home', component: HomeComponent },
  {
    path: 'user-details/:id',
    title: 'Maids | User Details',
    component: UsersDetailsComponent,
  },
  { path: 'add-user', title: 'Maids | Add User', component: AddUserComponent },
  { path: '**', title: '404 page not found', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
