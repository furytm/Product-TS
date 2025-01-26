"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("../services/product.services");
const productService = new product_services_1.ProductService;
class ProductController {
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productData = req.body;
            const { name, price, category, description, color } = productData;
            if (!name || !price || !category || !description || !color)
                throw new Error("fill all fields");
            try {
                const newProduct = yield productService.createProduct(productData);
                res.status(201).json({ message: "Product created Successfully", product: newProduct });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Somethingh went wrong" });
            }
        });
    }
    // Get all products
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService.getAllProducts();
                res.status(200).json({ success: true, products });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: "Something went wrong while fetching products" });
            }
        });
    }
    // Get a single product by ID
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            try {
                const product = yield productService.getProductById(productId);
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json({ success: true, product });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: "Something went wrong while fetching the product" });
            }
        });
    }
    // Update a product by ID
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            const productData = req.body;
            try {
                const updatedProduct = yield productService.updateProduct(productId, productData);
                if (!updatedProduct) {
                    res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json({ success: true, product: updatedProduct });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: "Something went wrong while updating the product" });
            }
        });
    }
    // Delete a product by ID
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            try {
                const deletedProduct = yield productService.deleteProduct(productId);
                if (!deletedProduct) {
                    res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json({ success: true, message: "Product deleted successfully" });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: "Something went wrong while deleting the product" });
            }
        });
    }
}
exports.ProductController = ProductController;
