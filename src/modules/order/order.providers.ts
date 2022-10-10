import { Orders } from "./order.model";
import { REPOSITORY } from "../../common/constants";

export const orderProviders = [
  {
    provide: REPOSITORY.ORDER_REPOSITORY,
    useValue: Orders,
  },
];
