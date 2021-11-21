import { getCustomRepository } from 'typeorm'

import { Product } from '../typeorm/entities'
import { ProductsRepository } from '../typeorm/repositories'

class CreateProductService {
    public async execute(): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductsRepository)

        const products = await productsRepository.find()

        return products
    }
}

export default CreateProductService
