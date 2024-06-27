import { Request, Response } from "express";
import { DeleteCustomerUseCase } from "./delete-client.usecase";

export class DeleteCustomerController {

    private readonly useCase: DeleteCustomerUseCase;

    constructor() {
        this.useCase = new DeleteCustomerUseCase()
    }

    async handle(request: Request, response: Response) {
        
        try{
            const result = await this.useCase.execute(request.params.id);
            return response.status(200).json(result)
        }catch(err: any){
            return response.status(400).json({ error: err.message })
        }
    }
}
