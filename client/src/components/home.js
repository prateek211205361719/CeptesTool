
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import BlockHeader from './BlockHeader';
import * as action from '../actions';
class Home extends Component{
    componentDidMount(){
        this.props.getUserDashBoard();
    }
    render(){
        return(
            <section className="content">
                <BlockHeader header="Home" />
                <div className="container-fluid">
                </div>
            </section>
        );
    }
}
export default connect(null, action)(Home);