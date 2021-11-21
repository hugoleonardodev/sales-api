import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { Product } from '../typeorm/entities'
import { ProductsRepository } from '../typeorm/repositories'

interface IDeleteProductService {
    id: number
}

class DeleteProductService {
    public async execute({ id }: IDeleteProductService): Promise<Product | undefined> {
        const productsRepository = getCustomRepository(ProductsRepository)

        const product = await productsRepository.findOne(id)

        if (!product) {
            throw new AppError(`There is no product with id: ${id}`)
        }

        await productsRepository.remove(product)

        return product
    }
}

export default DeleteProductService
