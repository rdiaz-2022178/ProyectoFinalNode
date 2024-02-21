import {Router} from 'express'
import { addAdmin, addClient, deleted, login, test, update } from './user.controller.js'
import {isAdmin, validateJwt} from '../middlewares/validate-jwt.js'
const api = Router()

api.get('/test', [validateJwt, isAdmin], test)
api.post('/addClient', addClient)
api.post('/addAdmin', addAdmin)
api.post('/login', login)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleted)

export default api