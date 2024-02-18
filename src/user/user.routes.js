import {Router} from 'express'
import { add, deleted, login, test, update } from './user.controller.js'
import {isAdmin, validateJwt} from '../middlewares/validate-jwt.js'
const api = Router()

api.get('/test', [validateJwt, isAdmin], test)
api.post('/add', add)
api.post('/login', login)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleted)

export default api