import { Injectable, Inject } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { REPOSITORY } from "./../../common/constants/repository.constants";
import { Orders } from "./order.model";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrderService {
  constructor(
    @Inject(REPOSITORY.ORDER_REPOSITORY)
    private readonly orderRepository: typeof Orders,
  ){}
  
  create(createOrderDto: CreateOrderDto) {
    return "This action adds a new order";
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
