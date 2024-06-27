import { Request, Response } from "express";
import { UpdateCustomerUseCase } from "./update-client.usecase";

export class UpdateCustomerController {

    private readonly useCase: UpdateCustomerUseCase;

    constructor() {
        this.useCase = new UpdateCustomerUseCase()
    }

    async handle(request: Request, response: Response) {
        
        try{
            const result = await this.useCase.execute(request.params.id, request.body);
            return response.status(200).json(result)
        }catch(err: any){
            return response.status(400).json({ error: err.message })
        }
    }
}
