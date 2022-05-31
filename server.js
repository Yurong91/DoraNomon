require('dotenv').config()
const express = require('express')
const { connect, connection } = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Category = require('./Models/Category')
const Product = require('./Models/Product')
const path = require("path");
const fs = require("fs");
// const res = require('express/lib/response')
const multer = require('multer')
const upload = multer({
    dest: "../public/Images",
    fieldNameSize: 300,
    limits:{fileSize:1048546 //10Mb
    }
});

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
// app.delete('/products/:id', (req, res) => {
//     Product.findByIdAndDelete(req.params.id, (err) => {
//         if (!err) {
//             res.status(200).redirect('/products/category')
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err,DeleteProduct) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})


//Update
app.put('/products/:id', upload.single("img"), (req, res) => {
    if (req.file) {
    const tempPath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLocaleLowerCase();
    //Remove special characters and more than one white space, also remove white space from start and end
    const cleanName = (req.body.name).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim();
    //Removes white space from string
    const cleanFileName = cleanName.replace(/\s/g, '');
    const publicPath = "/images/"+cleanFileName+Date.now()+fileExt;
    const localPath = "/public"+publicPath;
    const targetPath = path.join(__dirname, localPath);
    if(fileExt === ".png" || fileExt === ".jpg" ){
        fs.rename(tempPath, targetPath, err => {
            if (err){
                res.status(400).json(err)
            }else{
                const fileDelete = path.join(__dirname, "/public"+req.body.img)
                fs.unlink(fileDelete,  err => {
                  console.log("File deleted.")
                });
                req.body.img = publicPath;
                req.body.name = cleanName;
                Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateProduct) => {
                    if (!err) {
                        res.status(200).redirect("/products/"+req.body.category)
                    } else {
                        res.status(400).json(err)
                    }
                })
            }  
        });
    }else{
        fs.unlink(tempPath, err => {
            err ? res.status(400).json(err) : res.status(200).json({"img":"Only PNG or JPG File."});
        });
    }

    } else{
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateProduct) => {
            if (!err) {
                res.status(200).redirect("/products/"+req.body.category)
            } else {
                res.status(400).json(err)
            }
        })

    }
    
})

//Create
app.post('/products', upload.single("img"), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    // Product.create(req.body, (err, createProduct) => {
    //     // res.redirect('/products')
    // })
    const tempPath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLocaleLowerCase();
    //Remove special characters and more than one white space, also remove white space from start and end
    const cleanName = (req.body.name).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim();
    //Removes white space from string
    const cleanFileName = cleanName.replace(/\s/g, '');
    const publicPath = "/images/"+cleanFileName+Date.now()+fileExt;
    const localPath = "/public"+publicPath;
    const targetPath = path.join(__dirname, localPath);
    console.log(targetPath)
    console.log(__dirname)
    if(fileExt === ".png" || fileExt === ".jpg" ){
        fs.rename(tempPath, targetPath, err => {
            if (err){
                res.status(400).json(err)
            }else{
                req.body.img = publicPath;
                req.body.name = cleanName;
                Product.create(req.body, (err, createdVpet) => {
                    err ? res.send(err) : res.redirect("/products/"+req.body.category);  
                })
            }  
        });
    }else{
        fs.unlink(tempPath, err => {
            err ? res.status(400).json(err) : res.status(200).json({"img":"Only PNG or JPG File."});
        });
    }
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
    // console.log(req.params.category)
    Product.find({category: req.params.category}, (err, foundProducts)=> {
        res.render('Show', {products: foundProducts})
        // res.json(foundCategory)
    })
})

// app.get("/products/:category", (req, res) => {
//     // console.log(req.params.category)
//     Product.find({category: req.params.category}, (err, foundProducts)=> {
//         res.render('Show', {products: foundProducts})
//         // res.json(foundCategory)
//     })
// })
//Show2
app.get("/products/:category", (req, res) => {
    // console.log(req.params.category)
    Product.find({category: req.params.category}, (err, foundProducts)=> {
        res.render('ShowTwo', {products: foundProducts})
        // res.json(foundCategory)
    })
})


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
