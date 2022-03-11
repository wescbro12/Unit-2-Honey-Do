const React = require('react');
// const Default = require('./layout/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Tools Page</h1>
                <nav>
                    <a href='/projects'>Return to Project Directory</a>
                </nav>
                <form action="/tools" method="POST">
                    <p> Please enter the tools needed for this project</p>
                    <input name="name" /><br />
                    {/* <ul>
                        <li>Hammer<input name="tools" type="checkbox" /></li>
                        <li>Saw<input name="tools" type="checkbox" /></li>
                        <li>Drill<input name="tools" type="checkbox" /></li>
                        <li>Screwdriver<input name="tools" type="checkbox" /></li>
                        <li>Measuring Tape<input name="tools" type="checkbox" /></li>
                    </ul> */}
                    <input type="submit" value="Add Tools to Your Project" />
                </form>
            </div>
        )
    }
}

module.exports = New;