
import axios from 'axios';
export const isLogin = () =>  async (dispatch) => {
    var response = await axios.get('/api/login');
     dispatch({
        type:"IS_LOGIN",
        playload:response.data
    });   
};

export const getUserDashBoard = () => async function(dispatch){
    var response = await axios.get('/api/userInfo');
    console.log(response.data);
    //defined in project reducers
    dispatch( {
        type:"GET_PROJECT",
        playload:response.data.project
    });

     //defined in user reducers
    dispatch( {
        type:"GET_USERS",
        playload:response.data.users
    });
         
     
  
};

export const refreshForm = (val , type) => {
    return({
        type:"REFRESH_FORM",
        playload:{refreshForm: val, type:type}
    });  
};

export const selectedProject = (project) => {
    console.log(project);
    return({
        type:"SELECTED_PROJECT",
        playload:project
    });  
}

//defined in project reducers
export const createProject = (projectObj) => async function(dispatch){
   
    var result = await axios.post('/api/projects', projectObj);
    console.log(result);
    if(!result.data){

    }else{
        dispatch({
            type:"CREATE_PROJECT",
            playload:result.data
        });  
    }
   
}
