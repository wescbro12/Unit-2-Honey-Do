const React = require('react');
const Default = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <Default title="Edit your tool selection">
            <div>
                <h1> Edit your tool selection </h1>
                <form action={`/tools/${this.props.tools._id}?_method=PUT`} method="POST">
                    <a href='/projects'>Return to Project Directory</a>

                    <p>Please add a tool to your project</p><br />
                    <input name="name" />
                    <input type="submit" value="Update Tools List" />
                </form>
                <a className='home' href='/'>HOME</a>

                </div>
            </Default>
        )
    }
}

module.exports = Edit;