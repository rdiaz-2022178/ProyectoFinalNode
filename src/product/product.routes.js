import {Router} from 'express'
import { add, catalogue, deleted, exhausted, search, test, update } from './product.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate-jwt.js'
const api = Router()

api.get('/test', test)
api.post('/add', [validateJwt, isAdmin], add)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleted)
api.post('/search/:search', [validateJwt, isAdmin],  search)
api.get('/catalogue', [validateJwt, isAdmin], catalogue)
api.get('/exhausted', [validateJwt, isAdmin], exhausted)

export default api
