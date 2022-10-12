import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderProvider } from "./order.providers";

@Module({
  controllers: [OrderController],
  providers: [OrderService, ...OrderProvider],
})
export class OrderModule {}
