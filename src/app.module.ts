import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { DatabaseModule } from "./modules/database/database.module";
import { UsersModule } from "./modules/users/users.module";
import { OrderModule } from "./modules/order/order.module";
import currentConfig from "../config";

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, load: [currentConfig] }),
    UsersModule,
    OrderModule,
  ],
})
export class AppModule {}
