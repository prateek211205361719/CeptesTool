

import React,{ Component } from 'react'
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';

class MenuHeader extends Component{
    
    renderContent(){
        /*var projects = this.props.project;
        return projects.map((item, index) => {
             return (
                <li key={`menuheaderproject${index}`}>
                    <Link to={`/project/${item._id}`}>{item.name}</Link> 
                 </li>
            );
        });*/
    }
    render(){
       
        return(
            <div className="menu-container">
                <div className="menu">
                    <ul className="pullDown">
                        <li className="menu-dropdown-icon">
                            <Link to={`/project/${this.props.selectedProject._id}`}>Dashboard</Link>
                        </li>
                        <li className="menu-dropdown-icon">
                            <Link to="/milesstone">Milesstone</Link>
                        </li>
                        <li className="menu-dropdown-icon">
                             <Link to="/">Task</Link>
                        
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        project: state.project,
        selectedProject: state.selectedProject
    }
}
export default connect(mapStateToProps, null)(MenuHeader);