import { Request, Response} from "express";
import { UpdateProductUseCase } from "./update-product.usecase";

export class UpdateProductController {
    constructor() {}

    async handle(request: Request, response: Response){
        const useCase = new UpdateProductUseCase();
        try {
            const result = await useCase.execute(request.params.id, request.body);
            return response.status(200).json(result);
        }catch(err: any){
            return response.status(400).json({error: err.message});
            
        }
    
    }
}
