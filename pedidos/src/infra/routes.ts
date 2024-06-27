import { Router } from "express";
import { CreateOrderController } from "../modules/create-order/create-order.controller";
import { UpdateStatusOrderController } from "../modules/update-status-order/update-status-order.controller";
import { DeleteOrderController } from "../modules/delete-order/delete-order.controller";

const router = Router();

router.post("/orders", (request, response) => {
    new CreateOrderController().handle(request, response)
});
router.patch("/orders", (request, response) => {
    new UpdateStatusOrderController().handle(request, response)
});
router.delete("/orders/:id", (request, response) => {
    new DeleteOrderController().handle(request, response)
});

export { router };