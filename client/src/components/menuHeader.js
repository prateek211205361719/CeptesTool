

import React,{ Component } from 'react'
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';

class MenuHeader extends Component{
    
    renderContent(){
        var projects = this.props.project;
        return projects.map((item) => {
             return (
                <li>
                    <Link to={`/project/${item._id}`}>{item.name}</Link> 
                 </li>
            );
        });
    }
    render(){
       
        return(
            <div className="menu-container">
                <div className="menu">
                    <ul className="pullDown">
                        <li className="menu-dropdown-icon">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className="menu-dropdown-icon">
                            <a href="#">Projects</a>
                            <ul className="pullDown normal-sub">
                                {this.renderContent()}
                             </ul>
                        </li>
                        <li className="menu-dropdown-icon">
                            <a href="">Task</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        project: state.project
    }
}
export default connect(mapStateToProps, null)(MenuHeader);