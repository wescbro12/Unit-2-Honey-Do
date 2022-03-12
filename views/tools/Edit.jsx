const React = require('react');

class Edit extends React.Component {
    render() {
        return (
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
        )
    }
}

module.exports = Edit;