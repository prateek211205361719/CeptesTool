
import React,{ Component } from 'react';
import Login from './components/login';
import Header from './components/header';
import MenuHeader from './components/menuHeader';
import Sidebar from './components/sidebar';
import Home from './components/home';
import UserDashboard from './components/userdashboard';
import { compose} from 'redux';
import { connect } from 'react-redux';
import ProjectDashboard from  './components/projectDashboard';
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

