import { prismaClient } from "../../infra/database/prismaClient"


export class ListCustomersUseCase {
    constructor() {}

    async execute(customerId: string) {

        if(customerId){

            const customer = await prismaClient.client.findFirst({
                where: {
                    id: customerId
                }
            })
            console.log(customer)
            return customer
        }else{
            const allCustomers = await prismaClient.client.findMany();        
            return allCustomers
        }
            
    }
}