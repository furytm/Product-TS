import  {Router}  from "express";
import { ProductController } from "../controllers/product.controller";


const {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = new ProductController();
const router = Router();

router.post("/products",createProduct );
router.get("/products",getAllProducts );
router.get("/products/:id", getProductById);
router.put("/products/:id",updateProduct);
router.delete("/products/:id",deleteProduct);

export default router;