const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class ShowTwo extends React.Component {
    render() {
        // console.log(this.props.product)
        // const category = this.props.category
        const { products } = this.props
        // const product = this.props.product
        // console.log(products)
        return (
            <DefaultLayout title="Shop for Carrier Bags" name="ShowTwo">

                {/* <nav>
                   <h1>TOYS</h1>
                </nav>
                <h3><a href="/products/new">Create New Product</a></h3>
                <ul>
                    {
                        <li key={product._id}>
                            <p>The <a href={`/products/${product._id}`}>{product.name}'s price is {product.price}.</a></p>
                            <p>{product.stock} in stock.</p>
                            <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete" />

                            </form>
                            <button>
                               <a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a>
                            </button>
                        </li>
                    }
                    
                </ul> */}
                <nav>
                     <h3><a href="/products/new">Create New Product</a></h3>
                </nav>
                {
                   products.map(product => {
                       return (
                           <ul id="productList">
                           <li key={product._id}>
                               <img src= {product.img} alt="" />
                               <p>The <a href={`/products/${product._id}`}>{product.name}'s price is $ {product.price}.</a></p>
                            <p>{product.stock} in stock.</p>
                            <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="delete" />
                            </form>
                            <button>
                               <a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a>
                            </button>
                           </li>
                           </ul>
                       )
                   }) 
                }



            </DefaultLayout>
        )
    }
}

module.exports = ShowTwo