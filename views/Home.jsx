const React = require('react');
const Default = require('./layout/Default.jsx')

class Home extends React.Component {
    render() {
        return (
            <Default title="Honey Do">
                <div>
               
                    {/* <h2><a className='directory' href='/projects/new'>Create a new Project</a></h2>
                    
                    <h2><a className='directory' href='/projects'>Project Directory</a></h2> */}
                    <a className='login' href='/'>LOG IN</a>
                </div>
            </Default>
        )
    }
}

module.exports = Home