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
exports.ProductService = void 0;
const product_model_1 = require("../models/product.model");
class ProductService {
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = new product_model_1.ProductModel(data);
            return yield newProduct.save();
        });
    }
    // Get all products
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.ProductModel.find();
        });
    }
    // Get a single product by ID
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.ProductModel.findById(productId);
        });
    }
    // Update a product by ID
    updateProduct(productId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.ProductModel.findByIdAndUpdate(productId, data, {
                new: true, // Return the updated product
                runValidators: true, // Ensure validation rules are applied
            });
        });
    }
    // Delete a product by ID
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.ProductModel.findByIdAndDelete(productId);
        });
    }
}
exports.ProductService = ProductService;
