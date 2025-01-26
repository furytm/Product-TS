import mongoose, { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product.interface";
const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    location: { type: String, required: false }



}, {
    timestamps: true
})
export const ProductModel = model<IProduct>("Product", productSchema)