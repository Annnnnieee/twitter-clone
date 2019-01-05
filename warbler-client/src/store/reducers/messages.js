import {LOAD_MESSAGES, REMOVE_MESSAGE} from "../actionTypes";

const message = (state = [], action ) => {
    switch(action.type){
        case LOAD_MESSAGES:
            return [...action.messages];
            break;
        case REMOVE_MESSAGE:
            return state.filter(message => message._id !== action.id)
        default:
            return state;
            break;
            }
}

export default message; 