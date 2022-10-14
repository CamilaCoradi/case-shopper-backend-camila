import { BaseDatabase } from "./BaseDatabase";

export class ProductsDataBase extends BaseDatabase {
  private TABLE = "PRODUCTS_LIST";

  public getProducts = async () => {
    try {
      const products = await ProductsDataBase.connection(this.TABLE).select(
        "*"
      );
      return products;
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

}
