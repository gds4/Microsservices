import { UpdateStatusOrderUseCase } from "./update-status-order.usecase";
import { Request, Response } from "express";

export class UpdateStatusOrderController {
    constructor() {}

    async handle(request: Request, response: Response){
        const useCase = new UpdateStatusOrderUseCase();
        try{
            
            const result = await useCase.execute(request.body);
        
            return response.status(200).json(result);
        }catch(err: any){
            return response.status(400).json({ error: err.mesage, stack: err.stack });
        }
        
    }
}
