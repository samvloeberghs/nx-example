import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserComponent
      }
    ])
  ],
  declarations: [
    UsersComponent,
    UserComponent
  ]
})
export class CmsFeatUsersModule {
}
