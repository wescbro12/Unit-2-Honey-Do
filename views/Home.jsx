const React = require('react');

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1> Welcome to the Honey Do App</h1>

                <h2><a href='/projects/new'>Create a new Project</a></h2>
            </div>
        )
    }
}

module.exports = Home