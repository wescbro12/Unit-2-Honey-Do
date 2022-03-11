const React = require('react');


class Show extends React.Component {
    render() {
        const tools = this.props.tools
        const project =this.props.projects
        return (
            <div>
                <h2>Tools Directory</h2>
                <nav>
                    <a href='/tools'>Return to Tools Directory</a>
                </nav>
                How would you like to use this tool?
                <form action={`/tools/${tools._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />

                </form>
                <a href="/projects"><button>Add to Project</button></a>

            </div>
        )
    }
}

module.exports = Show