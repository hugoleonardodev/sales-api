import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import Product from '../typeorm/entities/Product'
import ProductsRepository from '../typeorm/repositories/ProductsRepository'

interface IShowProductService {
    id: string
}

class ShowProductService {
    public async execute({ id }: IShowProductService): Promise<Product | undefined> {
        const productsRepository = getCustomRepository(ProductsRepository)

        const product = await productsRepository.findOne(id)

        if (!product) {
            throw new AppError(`There is no product with id: ${id}`)
        }

        return product
    }
}

export default ShowProductService
