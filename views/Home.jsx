const React = require('react');
const Default = require('./layout/Default.jsx')

class Home extends React.Component {
    render() {
        return (
            <Default title="Honey Do">
                <div>                                
                    <a className='login' href='/'>LOG IN</a>
                    <p className='landing'>WELOME!<br />
                        This app is a way to keep track of all of your DIY projects.
                        
                        
                    </p>
                </div>
            </Default>
        )
    }
}

module.exports = Home