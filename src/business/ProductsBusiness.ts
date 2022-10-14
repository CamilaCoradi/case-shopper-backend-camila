import { ProductsDataBase } from "../data/ProductsDatabase";

export class ProductsBusiness {
  async getProducts(): Promise<any> {
    const getProductsDataBase = new ProductsDataBase();
    const products = await getProductsDataBase.getProducts();

    return products;
  }
}
