import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { Product } from '../typeorm/entities'
import { ProductsRepository } from '../typeorm/repositories'

interface IShowProductService {
    id: number
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
