
import React,{ Component } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import MenuHeader from './components/MenuHeader';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Milesstone from './components/Milesstone.js';
import UserDashboard from './components/UserDashboard';
import ProjectDashboard from  './components/projectDashboard';

import { compose} from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter,Route, Redirect,Switch,withRouter } from 'react-router-dom';
import * as action from './actions';

class App extends Component{
    componentDidMount(){
        this.props.isLogin();
    }

    render(){
        fakeAuth.isAuthenticated = this.props.auth;
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <MenuHeader />
                    <Sidebar />
                    <Route path="/login"  component={Login} />
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/user/:id"  component={UserDashboard} exact={true} />
                    <Route path="/project/:id"  component={ProjectDashboard} exact={true} />
                    <Route path="/milesstone"  component={Milesstone} exact={true} />
                    
               </div>
            </BrowserRouter>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
   
    <Route {...rest} render={props => (
     
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
 )


 export const fakeAuth = {
    isAuthenticated: true,   
}

function mapStateToProps(state){
    console.log(state);
    return {auth:state.auth};
}
export default connect(mapStateToProps, action)(App);

