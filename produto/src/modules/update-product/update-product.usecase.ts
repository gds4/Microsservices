import { prismaClient } from "../../infra/database/prismaClient"

type UpdateProductRequest = {
    name: string
    code: string 
    price: number
}

export class UpdateProductUseCase {
    constructor() {}

    async execute(productId: string, data: UpdateProductRequest) {
        const product = await prismaClient.product.findFirst({
            where: {
            id: productId
            },
        });

        if (!product) throw new Error("Product don't exists");

        const productUpdated = await prismaClient.product.update({
            where: {
                id: productId
            },
            data: {
                ...data
            }
        });

        return productUpdated;


    }
}