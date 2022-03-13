const React = require('react');
const Default = require('../layout/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="New Project">
                <div>
                    <nav>                    
                    </nav>
                    <a><h2 className="back">BACK</h2></a>
                    <form action="/projects" method="POST">
                        <p>Project Name:</p><br /><input name="title" type="text" /><br />
                        <br /><p>Project Description:</p><br /><textarea name="entry" autoCorrect='on' /><br />

                        <br /><input type="submit" value="Create new project" />
                    </form><br />

                    <br /><a href='/projects'><h3>Return to Project Directory</h3></a>
                   
                </div>
            </Default>
        )
    }
}

module.exports = New;