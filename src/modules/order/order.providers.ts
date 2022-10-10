import { Orders } from "./model/order.Model";
import { REPOSITORY } from "../../common/constants";

export const orderProviders = [
  {
    provide: REPOSITORY.ORDER_REPOSITORY,
    useValue: Orders,
  },
];
