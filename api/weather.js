require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()

const apiKey = process.env.API_KEY || ''

app.use(express.json())

app.get('/weather', (req, res) => {
  // res.json({ status: 'ok' })
  const { lat, lng } = req.query

  axios
    .get(`https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=ca`)
    .then((response) => {
      // console.log(response)
      res.json({ weather: response.data })
    })
})

module.exports = {
  path: '/api/',
  handler: app
}
