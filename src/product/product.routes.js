import {Router} from 'express'
import { add, catalogue, deleted, exhausted, search, test, update } from './product.controller.js'
const api = Router()

api.get('/test', test)
api.post('/add', add)
api.put('/update/:id', update)
api.delete('/delete/:id', deleted)
api.post('/search/:search', search)
api.get('/catalogue', catalogue)
api.get('/exhausted', exhausted)

export default api
