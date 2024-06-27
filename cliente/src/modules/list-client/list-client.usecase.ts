import { prismaClient } from "../../infra/database/prismaClient"


export class ListCustomersUseCase {
    constructor() {}

    async execute() {
            const allCostumers = await prismaClient.client.findMany();        
            return allCostumers
    }
}