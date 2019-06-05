import { createStore } from 'redux';

const initialState = {
    username: "",
    id: 0,
    imageurl: "",
    userpassword: ""
}

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ID = "UPDATE_ID";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_NAME:
            return {...state, username: payload}
        case UPDATE_ID:
            return {...state, id: payload}
        case UPDATE_IMAGE: 
            return {...state, imageurl: payload}
        case UPDATE_PASSWORD:
            return {...state, userpassword: payload }
        default:
            return state;
    }
}

export default createStore(reducer);
