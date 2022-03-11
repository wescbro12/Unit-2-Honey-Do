const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit your project </h1>
                <form action={`/projects/${this.props.projects._id}?_method=PUT`} method="POST">
                    <a href='/projects'>Return to Project Directory</a><br />
                    
                    Project Name:<br /><input name="title" type="text"  defaultValue={this.props.projects.title}/><br />
                    Project Description:<br /><input name="entry" type="text" defaultValue={this.props.projects.entry} /><br />
                    <a href='/tools/new'>Add tools to your project</a> <br />
                    <input type="submit" value="Update project" />
                </form>

            </div>
        )
    }
}

module.exports = Edit;