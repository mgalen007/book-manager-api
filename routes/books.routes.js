import { Router } from 'express'
import booksController from '../controllers/books.controller.js'
import booksValidator from '../middleware/books.validator.js'

const router = Router()

router.get('/', booksController.findAll)
router.get('/:id', booksController.findOne)
router.post('/', booksValidator('create'), booksController.create)
router.put('/:id', booksValidator('update'), booksController.update)
router.delete('/:id', booksController.remove)

export default router