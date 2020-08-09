import { GET_ALL_LAUNCHES, APPLY_FILTERS } from "../actions/keys";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_LAUNCHES:
      return { ...state, ...action.payload };
    case APPLY_FILTERS : {
      return  action.payload
    }   
    default :
      return state;
  }
};
