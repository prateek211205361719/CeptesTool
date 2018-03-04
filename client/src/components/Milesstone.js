

import React,{Component} from 'react';
import BlockHeader from './BlockHeader';
import UserCard from './projectDashboardChild/UserCard';
import {connect} from 'react-redux';
import * as action from '../actions';
import Moment from 'react-moment';
class Milesstone extends Component {
    openSidebar(){
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.add('open');
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        this.props.refreshForm(false, 'Milesstone');
    }
    componentDidMount(){
        var selectedProject = this.props.currentProject;
        this.props.getMilesStone(selectedProject._id);
    }
    renderContent(){
       return this.props.milesstoneList.map((item, index) => {
            return(
                <tr key={`milesstone${index}`}>
                    <td style={{"display": "table-cell"}} className="footable-first-visible"> {item.name}</td>
                    <td style={{"display": "table-cell"}}> {item._responsible[0].name}</td>
                    <td style={{"display": "table-cell"}}> 
                        <Moment format="YYYY/MM/DD">
                             {item.startDate}
                        </Moment>
                    </td>
                    <td style={{"display": "table-cell"}}> 
                       <Moment format="YYYY/MM/DD">
                             {item.startDate}
                        </Moment>
                    </td>
                </tr>
            );
        });
        
    }
    render(){
        var selectedProject = this.props.currentProject;
       
        return(
            <section className="content">
                    <BlockHeader header={selectedProject.name} subHeader="Milesstone" />
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card product-report">
                                    <div className="body">
                                        
                                        <div className="row clearfix">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="card">
                                                    <div className="header">
                                                        <h2><strong>Milesstone</strong></h2>
                                                        <ul className="header-dropdown">
                                                            <li className="dropdown" id="milestoneMenu"> 
                                                               <a href="#" onClick={() => document.getElementById("milestoneMenu").classList.toggle('show')}> <i className="zmdi zmdi-more"></i> </a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li><a  onClick={this.openSidebar.bind(this)}  href="javascript:void(0);">New</a></li>
                                                                </ul>
                                                            </li>
                                                         
                                                        </ul>
                                                    </div>
                                                    <div className="body table-responsive">
                                                        <table className="table table-striped m-b-0 footable footable-1 footable-paging footable-paging-center breakpoint-lg">
                                                            <thead>
                                                                <tr className="footable-header">
                                                                    <th className="footable-sortable footable-first-visible">
                                                                        Name
                                                                        <span className="fooicon fooicon-sort"></span>
                                                                    </th>
                                                                    <th className="footable-sortable footable-first-visible">
                                                                        Responsible
                                                                        <span className="fooicon fooicon-sort"></span>
                                                                    </th>
                                                                    <th className="footable-sortable footable-first-visible">
                                                                        Start Date
                                                                        <span className="fooicon fooicon-sort"></span>
                                                                    </th>
                                                                    <th className="footable-sortable footable-first-visible">
                                                                        End Date
                                                                        <span className="fooicon fooicon-sort"></span>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                               {this.renderContent()}
                                                            </tbody>
                                                        </table>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
             </section>
             
        );
    }
}

function mapStateToProps(state){
    
    return {
        project: state.project,
        currentProject: state.selectedProject,
        milesstoneList: state.milesstoneList
    };
}
export default connect(mapStateToProps, action)(Milesstone);