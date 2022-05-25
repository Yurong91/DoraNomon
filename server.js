require('dotenv').config()
const express = require('express')
const { connect, connection } = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Category = require('./Models/Category')

//======Connection to Database======
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => console.log('Connected to Mongo'))

// =======Setup Engineze=======
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//======Middleware======
app.use(method('_method'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use(express.json())

//=======Get Routes=======
// Index, New, Delete, Update, Create, Edit, Show
//Index
app.get('/categories', (req, res) => {
    Category.find({}, (err, allCategories) => {
        res.render('Index', {categories: allCategories})
    })  
})

//New


//Delete


//Update


//Create


//Edit


//Show


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
