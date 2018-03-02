
import { combineReducers } from 'redux';
import auth from './authreducer';
import project from './project';
import { reducer as formReducer } from 'redux-form';
import formRefresh from './formRefresh';
import selectedProject from './selectedProject';
import users from './users';
export default combineReducers({
    auth,
    project,
    form: formReducer,
    refreshForm:formRefresh,
    selectedProject,
    users
});