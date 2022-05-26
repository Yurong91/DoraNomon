require('dotenv').config()
const express = require('express')
const { connect, connection } = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Category = require('./Models/Category')
const Product = require('./Models/Product')
const res = require('express/lib/response')

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

app.get('/products', (req, res) => {
    Product.find({}, (err, allProduct) => {
        res.render('Index', {products: allProduct})
    })  
})



//New
app.get('/products/new', (req, res) => {
    res.render('New');
});


//Delete
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

//Update
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateProduct) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

//Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createProduct) => {
        res.redirect('/products')
    })
})

//Edit
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (!err) {
            res.render('Edit', {product: foundProduct})
        } else {
            res.status(400).json(err)
        }
    })
})

//Show
app.get("/products/:category", (req, res) => {
    Product.find({category: req.params.category}, (err, foundProduct)=> {
        res.render('Show', {product: foundProduct})
        // res.json(foundCategory)
    })
})


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
