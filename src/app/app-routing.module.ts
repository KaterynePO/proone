import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersIdComponent } from './users-id/users-id.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user', component: UsersComponent },
  { path: 'user/:id', component: UsersIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
