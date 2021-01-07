const express = require('express')

const app = express()

const PORT = 1234




app.listen(PORT, () => {
    console.log(`Listen on port : ${PORT}`)
})