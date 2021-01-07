const router = require('express').Router()

router.post('/register')
router.post('/login')
router.get('/list')
router.post('/list')
router.get('/list/:id')
router.patch('/list/:id')
router.delete('/list/:id')

module.exports = router