import { PROVIDERS } from "src/common/constants";
import { Orders } from "./order.model";

export const OrderProvider = [
  {
    provide: PROVIDERS.ORDER_PROVIDER,
    useFactory: () => {
      return Orders;
    },
  },
];
