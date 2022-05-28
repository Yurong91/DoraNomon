const React = require('react');
const DefaultLayout = require('./Layout/DefaultLayout');

class Index extends React.Component {
    render() {
        const { categories } = this.props
        const { products } = this.props
        return (
            <DefaultLayout title="DoraNomon" class='titleName'>
                {/* <nav class="Index">
                    DoraNomon
                </nav> */}
                <h1 id = "shopByCategory">
                    Shop by Category
                </h1>
                <ul id="ul">
                    <li><a href="/products/Toys"><img id="IndexImage" src="/images/toy2.jpg"></img><h3>Toys</h3></a></li>
                    <li><a href="/products/Carrier Bags"><img id="IndexImage" src="/images/bag5.jpg"></img><h3>Carrier Bags</h3></a></li>
                    <li><a href="/products/Beds"><img id="IndexImage" src="/images/bed2.jpg"></img><h3>Beds & Furniture</h3></a></li>
                    <li><a href="/products/Treats"><img id="IndexImage" src="/images/treat1.jpg"></img><h3>Treats</h3></a></li>
                    <li><a href="/products/Clothing"><img id="IndexImage" src="/images/clothes3.jpg"></img><h3>Clothing</h3></a></li>
                    <li><a href="/products/Accessories"><img id="IndexImage" src="/images/accessory2.jpg"></img><h3>Accessories</h3></a></li>
                    <li><a href="/products/Food"><img id="IndexImage" src="/images/food1.jpg"></img><h3>Food</h3></a></li>
                    <li><a href="/products/Health Care"><img id="IndexImage" src="/images/care1.jpg"></img><h3>Health Care</h3></a></li>
                </ul>
            </DefaultLayout>
        )
    }

};

module.exports = Index;