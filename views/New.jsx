const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Product" name="New">
                <form action="/products" encType="multipart/form-data" method="POST">
                  <label htmlFor="name">Product Name:</label>  
                  <input type="text" id="name" name="name"/>
                  <label htmlFor="price">Product Price:</label>  
                  <input type="text" id="price" name="price"/>
                  <label htmlFor="stock">Product in stock:</label>  
                  <input type="text" id="stock" name="stock"/>
                  <label for="category">Choose category:</label>
                  <select name="category" id="category" >
                      <option value="Toys">Toys</option>
                      <option value="Carrier Bags">Carrier Bags</option>
                      <option value="Beds & Furniture">Beds & Furniture</option>
                      <option value="Treats">Treats</option>
                      <option value="Clothingys">Clothing</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Food">Food</option>
                      <option value="THealth Care">Health Care</option>
                  </select>
                  <label htmlFor="img">image:</label>  
                  <input type="file"
                    id="img" name="img"
                    accept="image/png, image/jpeg" />
                  <input type="submit" value="Create Product"/>
                </form>
            </DefaultLayout>
        )
    }
}