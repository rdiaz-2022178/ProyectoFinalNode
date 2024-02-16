import express from 'express'
import {config} from 'dotenv'
import morgan from 'morgan'
import categoryRoutes from '../src/category/category.routes.js'
import productRoutes from '../src/product/product.routes.js'
import userRoutes from '../src/user/user.routes.js'
import buyRoutes from '../src/buy/buy.routes.js'
import invoiceRoutes from '../src/invoice/invoice.routes.js'

const app = express()
config()
const port = process.env.PORT 

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use('/buy', buyRoutes)
app.use('/invoice', invoiceRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server running ${port}`)
}