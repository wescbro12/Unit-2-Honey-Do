const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1> Edit your project </h1>
                <form action={`/projects/${this.props.projects._id}?_method=PUT`} method="POST">
                    <a href='/projects'>Return to Project Directory</a>
                    
                    Project Name:<br /><input name="title" type="text"  defaultValue={this.props.projects.title}/><br />
                    Project Description:<input name="entry" type="text" defaultValue={this.props.projects.entry} />
                    <hr></hr>
                    <h2>TOOLS</h2><br />
                    <ul>
                        <li>Hammer<input name="tools" type="checkbox" defaultChecked/></li>
                        <li>Saw<input name="tools" type="checkbox" defaultChecked/></li>
                        <li>Drill<input name="tools" type="checkbox" defaultChecked/></li>
                        <li>Screwdriver<input name="tools" type="checkbox" defaultChecked /></li>
                        <li>Measuring Tape<input name="tools" type="checkbox" defaultChecked/></li>
                    </ul>
                    <input type="submit" value="Update project" />
                </form>

            </div>
        )
    }
}

module.exports = Edit;