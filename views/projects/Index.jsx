const React = require('react');
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render() {
        const projects = this.props.projects
        return (
            <Default title="Project Directory">
                <div>
                    {/* <h1> Captain's project INDEX</h1> */}
                    <nav></nav >
                    <a><h2 className="back">BACK</h2></a>
                    <a href='/projects/new'><h2>Create a new project</h2></a>
                    <ul className="list-unstyled list-inline">
                        {projects.map((project) => {
                            return (
                                <li className="list-inline-item">
                                    <div key={`${project._id}`} className="row row-cols-1 row-cols-md-3">
                                        <div className="col mb-4">
                                            <div className="card" style={{ width: 15 + "em" }}>
                                                <img src={require('/image/hd.png')} className="card-img-top" style={{ height: 10 + "em" }} />
                                                <div className="card-body" >
                                                    <h5 className="card-title">{project.title}</h5>
                                                    <p className="card-text">Brief description of project</p>
                                                    <a href={`/projects/${project._id}`} className="btn btn-primary">Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            )
                        })}
                    </ul>


                    {/* 
                    
                    
                    <ul>
                        {projects.map((project) => {
                            return (
                                <li key={`${project._id}`}>
                                    <a href={`/projects/${project._id}`}>{project.title}</a>


                                </li>
                            )

                        })
                    }     
                    
                    </ul> */}


                    <a href='/tools'> <h3>Go to Tools Directory</h3></a>
                    {/* <a className='home' href='/'>HOME</a> */}

                </div>
            </Default>
        )
    }
}

module.exports = Index;