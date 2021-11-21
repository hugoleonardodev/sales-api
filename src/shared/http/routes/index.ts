import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
    return response.json({ message: 'Sales Api Listen on Port 3000 !!' })
})

export default routes
