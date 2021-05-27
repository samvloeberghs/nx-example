import { Module } from '@nestjs/common';

import { UsersModule } from '@nx-example/api-feat-users';

import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
