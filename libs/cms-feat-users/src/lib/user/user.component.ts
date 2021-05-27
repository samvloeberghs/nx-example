import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '@nx-example/shared-type-user';
import { UsersService } from '@nx-example/cms-data-access-users';

@Component({
  selector: 'nx-example-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => this.usersService.getUser(params.id))
  );

  constructor(
    private readonly usersService: UsersService,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

}
