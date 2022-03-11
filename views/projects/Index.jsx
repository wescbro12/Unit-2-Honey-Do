const React = require('react');
// const Default = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const projects = this.props.projects
        return (
            // <Default title="">
            <div>
                {/* <h1> Captain's project INDEX</h1> */}
                <nav>
                    <a href='/projects/new'>Create a new project</a>
                </nav>
                <ul>
                    {projects.map((project) => {
                        return (
                            <li key={`${project._id}`}>
                                <a href={`/projects/${project._id}`}>{project.title}</a>
                                {/* {`${project.title}`} */}
                                {/* {project.title.charAt(0).toUpperCase() + project.title.substr(1).toLowerCase()} */}

                                {/* <form action={`/projects/${project._id}?_method=Delete`} method="POST">

                                        <input type="submit" value={`Delete ${project.title}`} />
                                    </form> */}

                            </li>
                        )
                    })
                    }
                </ul>
                <a href='/tools'> Go to Tools Directory</a>

            </div>
            // </Default>
        )
    }
}

module.exports = Index;