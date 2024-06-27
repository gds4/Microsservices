import { Request, Response } from "express";
import { ListProductsUseCase } from "./list-product.usecase";

export class ListProductsController {

    private readonly useCase: ListProductsUseCase;

    constructor() {
        this.useCase = new ListProductsUseCase()
    }

    async handle(request: Request, response: Response) {
        
        try{
            const result = await this.useCase.execute();
            return response.status(200).json(result)
        }catch(err: any){
            return response.status(400).json({ error: err.message })
        }
    }
}
