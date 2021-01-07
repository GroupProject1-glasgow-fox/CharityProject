const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./router')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)
// app.use(errHandler)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})