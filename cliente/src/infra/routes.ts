import { Router } from "express";
import { CreateCustomerController } from "../modules/create-client/create-client.controller";
import { UpdateCustomerController } from "../modules/update-client/update-client.controller";
import { DeleteCustomerController } from "../modules/delete-client/delete-client.controller";
import { ListCustomersController } from "../modules/list-client/list-client.controller";

const router = Router();

router.post("/customers", (req, res) => {
    new CreateCustomerController().handle(req, res)
})

router.put("/customers/:id", (req, res) => {
    new UpdateCustomerController().handle(req, res)
})

router.delete("/customers/:id", (req, res) => {
    new DeleteCustomerController().handle(req, res)
})

router.get("/customers", (req,res) => {
    new ListCustomersController().handle(req,res)
})
export { router }