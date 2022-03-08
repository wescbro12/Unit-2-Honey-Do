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
                    Project Description:<br /><textarea name="entry" autoCorrect='on' />
                    <hr></hr>
                    <h2>TOOLS</h2><br />
                    <ul>
                        <li>Hammer<input name="tools" type="checkbox" /></li>
                        <li>Saw<input name="tools" type="checkbox" /></li>
                        <li>Drill<input name="tools" type="checkbox" /></li>
                        <li>Screwdriver<input name="tools" type="checkbox" /></li>
                        <li>Measuring Tape<input name="tools" type="checkbox" /></li>
                    </ul>
                    <input type="submit" value="Create new project" />
                </form>
            </div>
        )
    }
}

module.exports = New;