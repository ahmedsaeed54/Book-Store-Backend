const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book')
const authMiddleware = require('../middleware/auth.middleware')


router.get('/api/books', authMiddleware ,bookController.getAllBooks )
router.get('/api/books/:id', authMiddleware, bookController.getBook)
router.put('/api/books/:id', authMiddleware,bookController.updateBook)
router.post('/api/books', authMiddleware,bookController.addBook)
router.delete('/api/books/:id', authMiddleware,bookController.deleteBook)


module.exports= router