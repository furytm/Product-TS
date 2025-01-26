import { Request, Response } from "express";
import { ProductService } from "../services/product.services";
const productService = new ProductService;

export class ProductController {

    async createProduct(req: Request, res: Response): Promise<void> {

        const productData = req.body;
    const {name, price, category, description, color} = productData;
        if (!name || !price || !category || !description || !color)
            throw new Error("fill all fields");

        try {
      const newProduct = await productService.createProduct(productData)
      res.status(201).json({message:"Product created Successfully", product: newProduct})
        } catch(error) {
            console.log(error)
            res.status(500).json({message:"Somethingh went wrong"})


        }



    }


    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json({ success: true, products });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Something went wrong while fetching products" });
        }
    }


    async getProductById(req: Request, res: Response): Promise<void> {
        const productId = req.params.id;

        try {
            const product = await productService.getProductById(productId);
            if (!product) {
               res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, product });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Something went wrong while fetching the product" });
        }
    }


    async updateProduct(req: Request, res: Response): Promise<void> {
        const productId = req.params.id;
        const productData = req.body;

        try {
            const updatedProduct = await productService.updateProduct(productId, productData);
            if (!updatedProduct) {
                 res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, product: updatedProduct });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Something went wrong while updating the product" });
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        const productId = req.params.id;

        try {
            const deletedProduct = await productService.deleteProduct(productId);
            if (!deletedProduct) {
                 res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, message: "Product deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Something went wrong while deleting the product" });
        }
    }


}