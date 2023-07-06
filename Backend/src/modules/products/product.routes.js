import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, searchProduct, updateProduct } from './controllers/product.controller.js';



const router = express.Router();

router.get("/getAllProducts",getAllProducts);
router.post("/addProduct",addProduct);
router.delete("/deleteProduct",deleteProduct);
router.put("/updateProduct",updateProduct);
router.get("/searchProduct",searchProduct);
router.get("/getProduct",getProduct);
export default router;
