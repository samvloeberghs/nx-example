import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from '@nx-example/cms-data-access-users';
import { User } from '@nx-example/shared-type-user';

@Component({
  selector: 'nx-example-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$: Observable<User[]> = this.usersService.getUsers();

  constructor(private readonly usersService: UsersService) {
  }

}
