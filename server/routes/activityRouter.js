const router = require('express').Router()
const {authenticate} = require('../middleware/auth')
const authorize = require('../middleware/authorize')
const Controller = require('../controller/activityController')

router.use(authenticate)
router.get('/', Controller.getActivity)
router.post('/', Controller.createActivity)
router.get('/music', Controller.musicList)
router.get('/news', Controller.cnnNews)
router.get('/covid', Controller.covidUpdate)
router.get('/movie', Controller.movieList)
router.get('/weather', Controller.getWeather)

router.get('/:id', authorize, Controller.getActivityById)
router.put('/:id', authorize, Controller.editActivityById)
router.patch('/:id', authorize, Controller.changeStatus)
router.delete('/:id', authorize, Controller.deleteActivity)




module.exports = router