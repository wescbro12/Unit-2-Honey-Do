const React = require('react');
const Default = require('../layout/Default.jsx')


class Show extends React.Component {
    render() {
        const tools = this.props.tools
        const project = this.props.projects
        return (
            <Default title="Tools Directory">
                <div>
                    {/* <h2>Tools Directory</h2> */}
                    <nav>
                    </nav>
                    <a><h2 className="back">BACK</h2></a>
                    

                    How would you like to use this tool?<br />
                    <br /><a href="/projects"><button>Add to Project</button></a><br />

                    <br /><form action={`/tools/${tools._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    

                    <br /><a href='/tools'><h3>Return to Tools Directory</h3></a>
                </div>
            </Default>
        )
    }
}

module.exports = Show