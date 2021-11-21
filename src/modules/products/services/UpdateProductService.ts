import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import { Product } from '../typeorm/entities'
import { ProductsRepository } from '../typeorm/repositories'

interface IUpdateProductService {
    id: number
    name: string
    price: number
    quantity: number
}

class UpdateProductService {
    public async execute({
        id,
        name,
        price,
        quantity,
    }: IUpdateProductService): Promise<Product | undefined> {
        const productsRepository = getCustomRepository(ProductsRepository)

        const product = await productsRepository.findOne(id)

        if (!product) {
            throw new AppError(`There is no product with id: ${id}`)
        }

        const productExists = await productsRepository.findByName(name)

        if (productExists && product.name !== name) {
            throw new AppError(`There is no product with the name: ${name}`)
        }

        product.name = name
        product.price = price
        product.quantity = quantity

        await productsRepository.save(product)

        return product
    }
}

export default UpdateProductService
