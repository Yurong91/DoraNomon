const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Show extends React.Component {
    render() {
        console.log(this.props.category)
        const category = this.props.category
        return (
            <DefaultLayout>
                <h1>Toys</h1>
                <ul>
                    <li>Scratch Post</li>
                    <li></li>
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Show