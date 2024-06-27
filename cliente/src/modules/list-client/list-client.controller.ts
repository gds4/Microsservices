import { Request, Response } from "express";
import { ListCustomersUseCase } from "./list-client.usecase";

export class ListCustomersController {

    private readonly useCase: ListCustomersUseCase;

    constructor() {
        this.useCase = new ListCustomersUseCase()
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
