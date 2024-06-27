import { Request, Response} from "express";
import { DeleteProductUseCase } from "./delete-product.usecase";

export class DeleteProductController {
    constructor() {}

    async handle(request: Request, response: Response){
        const useCase = new DeleteProductUseCase();
        try {
            const result = await useCase.execute(request.params.id);
            return response.status(200).json(result);
        }catch(err: any){
            return response.status(400).json({error: err.message});
        }
    
    }
}
