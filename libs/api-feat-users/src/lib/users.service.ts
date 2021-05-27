import { Injectable } from '@nestjs/common';

import { users } from '@nx-example/api-data-access-users';
import { User } from '@nx-example/shared-type-user';

@Injectable()
export class UsersService {
  public getUser(id: number): User {
    return users.find(user => user.id === id);
  }

  public getUsers(): User[] {
    return users;
  }
}
