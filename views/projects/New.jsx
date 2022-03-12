const React = require('react');
const Default = require('../layout/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="New Project">
                <div>
                    <nav>
                      
                    </nav>
                    <form action="/projects" method="POST">
                        <p>Project Name:</p><br /><input name="title" type="text" /><br />
                        <p>Project Description:</p><br /><textarea name="entry" autoCorrect='on' /><br />

                        <input type="submit" value="Create new project" />
                    </form>
                    <a href='/projects'><h3>Return to Project Directory</h3></a>
                    <a className='home' href='/'>HOME</a>
                </div>
            </Default>
        )
    }
}

module.exports = New;