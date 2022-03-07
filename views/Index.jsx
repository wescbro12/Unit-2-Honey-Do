const React = require('react');
// const Default = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const projects = this.props.projects
        return (
            // <Default title="Captain's project Directory">
            <div>
                {/* <h1> Captain's project INDEX</h1> */}
                <nav>
                    <a href='/projects/new'>Create a new project</a>
                </nav>
                <ul>
                    {projects.map((project) => {
                        return (
                            <li key={`${project._id}`}>
                                <a href={`/projects/${project._id}`}>{project.title.charAt(0).toUpperCase() + project.title.substr(1).toLowerCase()}</a>
                                {/* {`${project.title}`} */}


                                {/* <form action={`/projects/${project._id}?_method=Delete`} method="POST">

                                        <input type="submit" value={`Delete ${project.title}`} />
                                    </form> */}

                            </li>
                        )
                    })
                    }
                </ul>

            </div>
            // </Default>
        )
    }
}

module.exports = Index;