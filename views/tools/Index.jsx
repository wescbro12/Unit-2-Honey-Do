const React = require('react');
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render() {
        const tools = this.props.tools
        return (
            <Default>
                <div>

                    <nav>
                    </nav>
                    <a><h2 className="back">BACK</h2></a>
                    <a href='/tools/new'><h2>Add a Tool to the Directory</h2></a>
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

                    <a href="/projects"><h3>Go to the Project Directory</h3></a>


                </div>
            </Default>
        )
    }
}

module.exports = Index;