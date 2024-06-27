import { prismaClient } from "../../infra/database/prismaClient"



export class ListProductsUseCase {
    constructor() {}

    async execute() {
            const allProducts = await prismaClient.product.findMany();        
            return allProducts
    }
}