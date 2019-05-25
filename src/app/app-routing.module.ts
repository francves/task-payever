import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './core/components/user/user.component'
import { UserListComponent } from './core/components/user-list/user-list.component'

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:userId', component: UserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
