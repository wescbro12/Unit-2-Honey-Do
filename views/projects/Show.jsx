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
                    <p>Project Description:</p> {projects.entry}
                    <p>Tools needed for this project:<br /></p>
                    {/* <p>Tools needed: {projects.tools ? 'Yes I need this tool' : 'No this tool is not needed'}</p> */}
                    <a href={`/projects/${projects._id}/edit`}> Edit your project</a><br />
                   
                    <a href='/projects'><h3>Return to Project Directory</h3></a>

                    <form action={`/projects/${projects._id}?_method=DELETE`} method="POST">
                        <br /><input type="submit" value="Delete this project" />
                    </form>
                    <a className='home' href='/'>HOME</a>
                </div>
            </Default>
        )
    }
}

module.exports = Show