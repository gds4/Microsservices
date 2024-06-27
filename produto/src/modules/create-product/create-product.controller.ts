import { Request, Response} from "express";
import { CreateProductUseCase } from "./create-product.usecase";

export class CreateProductController {
    private readonly useCase: CreateProductUseCase;

    constructor() {
        this.useCase = new CreateProductUseCase();
    }

    async handle(request: Request, response: Response){
        try {
            const result = await this.useCase.execute(request.body);
            return response.status(201).json(result);
        }catch(err: any){
            return response.status(400).json({ error: err.mesage, stack: err.stack });
        }
    }
}
