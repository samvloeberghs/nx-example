import { Controller, Get, Param } from '@nestjs/common';

import { User } from '@nx-example/shared-type-user';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {

  }

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params: { id: string }): User {
    return this.usersService.getUser(+params.id);
  }
}
