import { OrdersDataBase } from "../data/OrderDatabase";
import { MissingInformation } from "../error/customError";
import { OrderInputDTO } from "../model/Order";
import { IdGenerator } from "../services/IdGenerator";

export class OrdersBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private ordersDataBase: OrdersDataBase
  ) {}

  async createOrder(input: OrderInputDTO) {
    if (!input.clientName || !input.dueDate || !input.list) {
      throw new MissingInformation();
    }

    const id = this.idGenerator.generate();
    const newOrder = { id, ...input };

    await this.ordersDataBase.insertProducts(newOrder, id);

    return newOrder;
  }
}
