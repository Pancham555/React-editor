const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.sendFile(`${__dirname}/index.json`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}`))