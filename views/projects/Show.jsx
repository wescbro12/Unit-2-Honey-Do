const React = require('react');
const Default = require('../layout/Default.jsx')


class Show extends React.Component {
    render() {
        const projects = this.props.projects
        const tools = this.props.tools
        return (
            <Default title={projects.title.toUpperCase()}>
                <div>
                    {/* <h2>{projects.title.toUpperCase()}</h2> */}
                    <nav>
                    </nav>
                    <a><h2 className="back">BACK</h2></a>
                    <p>Project Description:</p> <textarea className="displaytext">{projects.entry}</textarea>
                    <p>Tools needed for this project:<br /></p>
                    <ul>
                        <li>Hammer</li>
                        <li>Nails</li>
                        <li>Table Saw</li>
                    </ul>
                    {/* <p>Tools needed: {projects.tools ? 'Yes I need this tool' : 'No this tool is not needed'}</p> */}
                    <br /><a href={`/projects/${projects._id}/edit`}> Edit your project</a><br />


                    <form action={`/projects/${projects._id}?_method=DELETE`} method="POST">
                        <br /><input type="submit" value="Delete this project" />
                    </form><br />

                  <br /><a href='/projects'><h3>Return to Project Directory</h3></a>

                </div>
            </Default>
        )
    }
}

module.exports = Show