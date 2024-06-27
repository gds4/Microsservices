import { Request, Response } from "express";
import { CreateClientUseCase } from "./create_client.usecase";

export class CreateCustomerController {
    private readonly useCase: CreateClientUseCase;

    constructor() {
        this.useCase = new CreateClientUseCase()
    }
    async handle(request: Request, response: Response) {

        try{

            const result = await this.useCase.execute(request.body);
            return response.status(201).json(result)

        }catch(err){
            
            return response.status(400).json(err)
        }
        
    }
}
