const React = require('react');
const Default = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <Default title="Edit your project">
                <div>
                
                <form action={`/projects/${this.props.projects._id}?_method=PUT`} method="POST">
                    
                    <p>Project Name:</p><br /><input name="title" type="text" defaultValue={this.props.projects.title} /><br />
                    <p>Project Description:</p><br /><textarea name="entry" type="text" defaultValue={this.props.projects.entry} /><br />
                    <a href='/tools/new'><h4>Add tools to your project</h4></a><br />
                    <input type="submit" value="Update project" />
                </form>
                <a href='/projects'><h3>Return to Project Directory</h3></a>
                <a className='home' href='/'>HOME</a>
                </div>
            </Default>
        )
    }
}

module.exports = Edit;