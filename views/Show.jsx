const React = require('react');


class Show extends React.Component {
    render() {
        const projects = this.props.projects
        return (
            <div>
                <h2>{projects.title.toUpperCase()}</h2>
                <nav>
                    <a href='/projects'>Return to Project Directory</a>
                </nav>
                <p>Project Description: {projects.entry}</p>
                <p>Tools needed: {projects.tools ? 'Yes I need this tool' : 'No this tool is not needed'}</p>
            </div>
        )
    }
}

module.exports = Show