require('dotenv').config()

const express = require('express')
const db = require('./db')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', async (req, res) => {
	let user = await db.User.findOne()
    res.json({ ...user })
})

app.listen(port, () => console.log(`Sequelize Demo app listening on port ${port}!`))
