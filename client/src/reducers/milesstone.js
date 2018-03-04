
var milesstone = (state=[], action) =>{
    switch(action.type){
        case 'GET_MILESSTONE':
            return action.playload
        default:
            return state;
    }
    
}

export default milesstone;