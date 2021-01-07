const router = require('express').Router()

const userRouter = require('./userRouter')
const actvRouter = require('./activityRouter')

router.get('/',(req,res) => {
    res.send('tes status')
})

router.use('/', userRouter)
router.use('/activities', actvRouter)


module.exports = router