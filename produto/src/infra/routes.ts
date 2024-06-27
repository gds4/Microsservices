import { Router } from "express";
import { CreateProductController } from "../modules/create-product/create-product.controller";
import { UpdateProductController } from "../modules/update-product/update-product.controller";
import { DeleteProductController } from "../modules/delete-product/delete-product.controller";
import { ListProductsController } from "../modules/list-product/list-product.controller";

const router = Router();

router.post("/products", (req, res) => {
    new CreateProductController().handle(req, res);
});

router.put("/products/:id", (req, res) => {
    new UpdateProductController().handle(req, res);
});

router.delete("/products/:id", (req,res)=>{
    new DeleteProductController().handle(req, res);
});

router.get("/products", (req, res) => {
    new ListProductsController().handle(req, res);
});

export { router };