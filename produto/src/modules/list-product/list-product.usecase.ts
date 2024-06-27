import { prismaClient } from "../../infra/database/prismaClient"



export class ListProductsUseCase {
    constructor() {}

    async execute(productId: string) {

        if(productId){
            const product = await prismaClient.product.findFirst({
                where: {
                    id: productId
                }
            });        
            return product
        }else{
            const allProducts = await prismaClient.product.findMany();        
            return allProducts  
        }
            
    }
}