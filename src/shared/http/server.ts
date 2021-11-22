import 'reflect-metadata' // typeorm required lib
import 'express-async-errors' // class that handles async errors on express, required for custom error handler
import { errors as celebrateErrors } from 'celebrate'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

import AppError from '@shared/errors/AppError'

// create typeorm db connection
import '@shared/typeorm'

import routes from './routes'

// express instance
const app = express()

// cors middleware
app.use(cors())

// express json middlaware same as body parser deprecated
app.use(express.json())

// app routes
app.use(routes)

// celebrate error middleware
app.use(celebrateErrors())

// custom error middleware
app.use(
    (error: Error, request: Request, response: Response, _next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            })
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        })
    },
)

// app listen on port 3000
app.listen(3000, () => {
    console.log('Sales Api Listen on Port 3000 !!')
})
