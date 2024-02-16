import {Router} from 'express'
import { add, deleted, login, test, update } from './user.controller.js'
const api = Router()

api.get('/test', test)
api.post('/add', add)
api.post('/login', login)
api.put('/update/:id', update)
api.delete('/delete/:id', deleted)

export default api