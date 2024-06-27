import { DeleteOrderUseCase } from "./delete-order.usecase";
import { Request, Response } from "express";

export class DeleteOrderController {
    constructor() {}

    async handle(request: Request, response: Response){
        const useCase = new DeleteOrderUseCase()
        try{
            const result = await useCase.execute(request.params.id);
            return response.status(200).json(result);

        }catch(err: any){
            return response.status(400).json({ error: err.mesage, stack: err.stack });
        }
        
    }
}
