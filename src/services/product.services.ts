import { IProduct } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

export class ProductService{

async createProduct(data: IProduct):Promise<IProduct>{
    const newProduct = new ProductModel(data)
    return await newProduct.save();
}

  
  async getAllProducts(): Promise<IProduct[]> {
    return await ProductModel.find();
  }


  async getProductById(productId: string): Promise<IProduct | null> {
    return await ProductModel.findById(productId);
  }


  async updateProduct(productId: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await ProductModel.findByIdAndUpdate(productId, data, {
      new: true, 
      runValidators: true, 
    });
  }

  async deleteProduct(productId: string): Promise<IProduct | null> {
    return await ProductModel.findByIdAndDelete(productId);
  }

}


