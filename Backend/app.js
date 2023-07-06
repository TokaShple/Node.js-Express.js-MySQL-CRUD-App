import express from 'express';
const app = express()
const port = 3000
import cors from 'cors';
import productRouters from './src/modules/products/product.routes.js'
import userRouters from "./src/modules/users/user.routes.js"
app.use(cors());
app.use(express.json());
app.use(productRouters);
app.use(userRouters);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
