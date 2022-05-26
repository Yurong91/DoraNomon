const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit" name="Edit">
                

            </DefaultLayout>
        )
    }
}