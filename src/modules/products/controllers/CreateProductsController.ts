import { Request, Response } from 'express'

import CreateProductService from '../services/CreateProductService'
import DeleteProductService from '../services/DeleteProductService'
import ListProductsService from '../services/ListProductsService'
import ShowProductService from '../services/ShowProductService'
import UpdateProductService from '../services/UpdateProductService'

class CreateProductsController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listProductsService = new ListProductsService()

        const productsList = await listProductsService.execute()

        return response.json(productsList)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, price, quantity } = request.body
        const createProductService = new CreateProductService()

        const newProduct = await createProductService.execute({
            name,
            price,
            quantity,
        })

        return response.json(newProduct)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const showProductService = new ShowProductService()

        const showProduct = await showProductService.execute({ id })

        return response.json(showProduct)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { name, price, quantity } = request.body
        const updateProductService = new UpdateProductService()

        const updatedProduct = await updateProductService.execute({
            id,
            name,
            price,
            quantity,
        })

        return response.json(updatedProduct)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const deleteProductService = new DeleteProductService()

        const deletedProduct = await deleteProductService.execute({ id })

        return response.json(deletedProduct)
    }
}

export default CreateProductsController
