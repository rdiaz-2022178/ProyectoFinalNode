import {Router} from 'express'

import  {add, deleted, find, test, update} from './category.controller.js'

const api = Router()

api.get('/test', test)
api.post('/add', add)
api.put('/update/:id', update)
api.delete('/delete/:id', deleted)
api.get('/find', find)

export default api