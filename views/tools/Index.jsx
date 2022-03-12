const React = require('react');
// const Default = require('../Default.jsx')

class Index extends React.Component {
    render() {
        const tools = this.props.tools
        return (
            // <Default title="Captain's project Directory">
            <div>
                {/* <h1> Captain's project INDEX</h1> */}
                <nav>
                    <a href='/tools/new'>Add a Tool to the Directory</a>
                </nav>
                <ul>
                    {tools.map((tool) => {
                        return (
                            <li key={`${tool._id}`}>
                                <a href={`/tools/${tool._id}`}>{tool.name.charAt(0).toUpperCase() + tool.name.substr(1).toLowerCase()}</a>
                                {/* <a href='/tools/show'><br /><button>Delete</button></a> */}

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

                <a href="/projects">Go to the Project Directory</a>
                <a className='home' href='/'>HOME</a>

            </div>
            // </Default>
        )
    }
}

module.exports = Index;