const React = require('react');


class Show extends React.Component {
    render() {
        const projects = this.props.projects
        const tools = this.props.tools
        return (
            <div>
                <h2>{projects.title.toUpperCase()}</h2>
                <nav>
                    <a href='/projects'>Return to Project Directory</a>
                </nav>
                <p>Project Description: {projects.entry}</p>
                <p>Tools needed for this project:<br /></p>
                {/* <p>Tools needed: {projects.tools ? 'Yes I need this tool' : 'No this tool is not needed'}</p> */}
                <a href={`/projects/${projects._id}/edit`}> Edit your project</a>
                <form action={`/projects/${projects._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete this project" />
                </form>

                
            </div>
        )
    }
}

module.exports = Show