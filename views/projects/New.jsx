const React = require('react');
// const Default = require('./layout/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <a href='/projects'>Return to Project Directory</a>
                </nav>
                <form action="/projects" method="POST">
                    Project Name:<br /><input name="title" type="text" /><br />
                    Project Description:<br /><textarea name="entry" autoCorrect='on' /><br />

                    <input type="submit" value="Create new project" />
                </form>
            </div>
        )
    }
}

module.exports = New;