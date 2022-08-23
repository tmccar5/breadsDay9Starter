// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

console.log('about to connect....')

mongoose.connect(process.env.MONGO_URI, {family:4}, function(err, connection) {
  // connection.db('breads');
  console.log('connected to DB!!!!!!!!')
});




// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
  
// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})










