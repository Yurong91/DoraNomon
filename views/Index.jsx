const React = require('react');
const DefaultLayout = require('./Layout/DefaultLayout');

class Index extends React.Component {
    render() {
        const { categories } = this.props
        return (
            <DefaultLayout title="DoraNomon" class='titleName'>
                {/* <nav class="Index">
                    DoraNomon
                </nav> */}
                <h3 id = "shopByCategory">
                    Shop by Category
                </h3>
                <ul id="ul">
                    <li id="toys"><a href="/categories/show">Toys</a></li>
                    <li id="CarrierBags">Carrier Bags</li>
                    <li id="Beds">Beds & Furniture</li>
                    <li id="Treats">Treats</li>
                    <li id="Clothing">Clothing</li>
                    <li id="Accessories">Accessories</li>
                    <li id="food">Food</li>
                    <li id="HealthCare">Health Care</li>
                </ul>
            </DefaultLayout>
        )
    }

};

module.exports = Index;