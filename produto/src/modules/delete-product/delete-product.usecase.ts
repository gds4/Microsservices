import { prismaClient } from "../../infra/database/prismaClient"

export class DeleteProductUseCase {
    constructor() {}

    async execute(productId: string) {
        const product = await prismaClient.product.findFirst({
            where: {
            id: productId
            },
        });

        if (!product) throw new Error("Product don't exists");

        const productDeleted = await prismaClient.product.delete({
            where: {
                id: productId
            }
        });
        return productDeleted;
    }
}