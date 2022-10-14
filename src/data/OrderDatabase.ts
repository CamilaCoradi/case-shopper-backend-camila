import { Order } from "../model/Order";
import { Product } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";
import { ProductsDataBase } from "./ProductsDatabase";

export class OrdersDataBase extends BaseDatabase {
    public insertProducts = async (input: Order, id: string) => {
    try {
      const { id, clientName, dueDate } = input;
      await OrdersDataBase.connection("ORDERS_LIST").insert({
        id,
        clientName,
        dueDate,
      });
      const items = input.list.map((item) => {
        return {
          productId: item.productId,
          orderId: input.id,
          productQuantity: item.productQuantity,
        };
      });
      items.forEach(async (item) => {
        let product: Product = await ProductsDataBase.connection(
          "PRODUCTS_LIST"
        )
          .select("*")
          .where("id", "like", item.productId)
          .first();
        product.qty_stock = product.qty_stock - item.productQuantity;
        await ProductsDataBase.connection("PRODUCTS_LIST")
          .where("id", "like", item.productId)
          .update({ qty_stock: product.qty_stock });
        await OrdersDataBase.connection("ORDERS_PRODUCTS").insert(item);
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
