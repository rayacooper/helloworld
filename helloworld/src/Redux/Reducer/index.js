import {combineReducers} from 'redux';


export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ID = "UPDATE_ID";
export const UPDATE_IMAGE = "UPDATE_IMAGE"

const user = (state={}, action) => {
    const {type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, username: payload}
        case UPDATE_ID:
            return {...state, id: payload}
        case UPDATE_IMAGE: 
            return {...state, imageurl: payload}
        default:
            return state;
    }
}

export default combineReducers(user);
