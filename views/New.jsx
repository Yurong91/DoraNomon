const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Product" name="New">
                <form action="/products" method="POST">
                  <lable htmlFor="name">Product Name:</lable>  
                  <input type="text" id="price" name="name"/>
                  <lable htmlFor="price">Product Price:</lable>  
                  <input type="text" id="price" name="price"/>
                  <lable htmlFor="stock">Product in stock:</lable>  
                  <input type="text" id="stock" name="stock"/>
                  <input type="submit" value="Create Product"/>
                </form>
            </DefaultLayout>
        )
    }
}