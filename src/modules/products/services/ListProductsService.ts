import { getCustomRepository } from 'typeorm'

import Product from '../typeorm/entities/Product'
import ProductsRepository from '../typeorm/repositories/ProductsRepository'

class ListProductsService {
    public async execute(): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductsRepository)

        const products = await productsRepository.find()

        return products
    }
}

export default ListProductsService
