import {  LOADING_START, LOADING_STOP } from "../actions/keys";

export default (state = [], action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, ...action.payload };
    case LOADING_STOP : {
      return  { ...state, ...action.payload }
    }   
    default :
      return state;
  }
};
