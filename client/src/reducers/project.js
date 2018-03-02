
var project = (state= [], action) => {
    switch(action.type){
        case 'GET_PROJECT':
            return action.playload;
        case 'CREATE_PROJECT':
            return [action.playload].concat(state);
        default:
            return state;
    }
};

export default project;