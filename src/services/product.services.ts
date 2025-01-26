import { IProduct } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

export class ProductService{

async createProduct(data: IProduct):Promise<IProduct>{
    const newProduct = new ProductModel(data)
    return await newProduct.save();
}

  // Get all products
  async getAllProducts(): Promise<IProduct[]> {
    return await ProductModel.find();
  }

  // Get a single product by ID
  async getProductById(productId: string): Promise<IProduct | null> {
    return await ProductModel.findById(productId);
  }

  // Update a product by ID
  async updateProduct(productId: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await ProductModel.findByIdAndUpdate(productId, data, {
      new: true, // Return the updated product
      runValidators: true, // Ensure validation rules are applied
    });
  }

  // Delete a product by ID
  async deleteProduct(productId: string): Promise<IProduct | null> {
    return await ProductModel.findByIdAndDelete(productId);
  }

}


