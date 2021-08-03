const express = require('express')
const app = express()
const port = 4000
const timeWorking=require('./timeWorking')

app.use(express.static('public'));

app.use(timeWorking);
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/services', (req, res) => {
    res.sendFile(__dirname+'/Services.html')
  })
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/Contact.html')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
