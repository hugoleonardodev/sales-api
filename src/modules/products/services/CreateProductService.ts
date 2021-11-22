import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'

import Product from '../typeorm/entities/Product'
import ProductsRepository from '../typeorm/repositories/ProductsRepository'

interface ICreateProductRequest {
    name: string
    price: number
    quantity: number
}

class CreateProductService {
    public async execute({ name, price, quantity }: ICreateProductRequest): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository)
        const productExists = await productsRepository.findByName(name)

        if (productExists) {
            throw new AppError(`There is already a product with the name: ${name}`)
        }

        const newProduct = productsRepository.create({
            name,
            price,
            quantity,
        })

        await productsRepository.save(newProduct)

        return newProduct
    }
}

export default CreateProductService
