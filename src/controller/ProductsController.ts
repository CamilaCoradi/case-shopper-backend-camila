import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";

export class ProductsController {
  async getProducts(req: Request, res: Response) {
    try {
      const getProductsBusiness = new ProductsBusiness();

      const products = await getProductsBusiness.getProducts();

      res.status(201).send({ products });
    } catch (error: any) {
      console.log(error);
      res.status(500).send(error);
    }
  };


}
