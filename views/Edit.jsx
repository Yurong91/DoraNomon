const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit" name="Edit">
                     <form action={`/products/${product._id}?_method=PUT`} encType="multipart/form-data" method="POST">
                  <label htmlFor="name">Product Name:</label>  
                  <input type="text" id="name" name="name" defaultValue={product.name}/>
                  <label htmlFor="price">Product Price:</label>  
                  <input type="text" id="price" name="price" defaultValue={product.price}/>
                  <label htmlFor="stock">Product in stock:</label>  
                  <input type="text" id="stock" name="stock" defaultValue={product.stock}/>
                  <label for="category">Choose category:</label>
                  <select name="category" id="category" >
                      <option selected= {product.category==="Toys" ? "selected" : "" } value="Toys">Toys</option>
                      <option selected= {product.category==="Carrier Bags" ? "selected" : "" } value="Carrier Bags">Carrier Bags</option>
                      <option selected= {product.category==="Beds & Furniture" ? "selected" : "" } value="Beds & Furniture">Beds & Furniture</option>
                      <option selected= {product.category==="Treats" ? "selected" : "" } value="Treats">Treats</option>
                      <option selected= {product.category==="Clothingys" ? "selected" : "" } value="Clothingys">Clothing</option>
                      <option selected= {product.category==="Accessories" ? "selected" : "" } value="Accessories">Accessories</option>
                      <option selected= {product.category==="Food" ? "selected" : "" } value="Food">Food</option>
                      <option selected= {product.category==="Health Care" ? "selected" : "" } value="Health Care">Health Care</option>
                  </select>
                  <label htmlFor="img">image:</label>  
                  <input type="file" id="img" name="img" accept="image/png, image/jpeg" />
                  {/* <img src={product.img} alt="" /> */}
                  <input type="text" id="origFilePath" name="img" defaultValue={product.img}/>
                  <input type="submit" value="Create Product"/>
                </form>
                <button><a href="/products">Back</a></button>

            </DefaultLayout>
        )
    }
}