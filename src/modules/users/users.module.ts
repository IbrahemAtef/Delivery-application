import { Logger, Module } from "@nestjs/common";
import { UserProvider } from "./users.providers";
import { UsersService } from "./users.service";
import { AuthController } from "./auth.controller";

@Module({
  controllers: [AuthController],
  providers: [UsersService, ...UserProvider, Logger],
  // exports: [UsersService],
})
export class UsersModule {}
