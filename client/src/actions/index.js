
import axios from 'axios';

export const isLogin = () =>  async (dispatch) => {
    try{
        var response = await axios.get('/api/login');
        dispatch({
            type:"IS_LOGIN",
            playload:response.data
        }); 
    }catch(e){
        console.log(e);
    }
   
};

export const getUserDashBoard = () => async function(dispatch){
    try{
        var response = await axios.get('/api/userInfo');
        console.log('------'+response.status);
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
    }catch(e){
        console.log(e);
    }
         
     
  
};

export const refreshForm = (val , type) => {
    return({
        type:"REFRESH_FORM",
        playload:{refreshForm: val, type:type}
    });  
};

export const selectedProject = (project) => {
    return({
        type:"SELECTED_PROJECT",
        playload:project
    });  
}

//defined in project reducers
export const createProject = (projectObj) => async function(dispatch){
   
    try{
        var result = await axios.post('/api/projects', projectObj);
        dispatch({
            type:"CREATE_PROJECT",
            playload:result.data
        });  
    }catch(e){
        console.log(e);
    } 
   
}

export const getMilesStone = (projectId) => async function(dispatch){
    try{
        var result = await axios.get(`/api/milestone/${projectId}`);
        dispatch({
            type:"GET_MILESSTONE",
            playload:result.data
        });  
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
