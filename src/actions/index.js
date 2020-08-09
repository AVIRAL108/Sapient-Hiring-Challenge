import { ApiConfig } from "../configs/api-configs";
import {
  GET_ALL_LAUNCHES,
  APPLY_FILTERS,
  LOADING_STOP,
  LOADING_START,
} from "./keys";

export const getAllLaunches = () => async (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: { status: true, percent: 30 },
  });
  await ApiConfig.get("/v3/launches?limit=6").then((res) => {
    if (res.status === 200) {
      dispatch({
        type: GET_ALL_LAUNCHES,
        payload: res.data,
      });
      dispatch({
        type: LOADING_STOP,
        payload: { status: false, percent: 100 },
      });
    }
    else  {
        dispatch({
            type: LOADING_STOP,
            payload: { status: false, percent: 100 },
        }); 
    }
  })
  .catch(() =>  dispatch({
    type: LOADING_STOP,
    payload: { status: false, percent: 100 },
}) )
};

export const applyFilter = ({
  launch_success,
  land_success,
  launch_year,
}) => async (dispatch) => {
    dispatch({
        type: LOADING_START,
        payload: { status: true, percent: 30 },
      });
  let URI = "/v3/launches?limit=100";
  URI =
    URI +
    "&launch_success=" +
    (launch_success === true ? "true" : "false") +
    "&land_success=" +
    (land_success === true ? true : false) +
    "&launch_year=" +
    (launch_year ? launch_year : null);
  await ApiConfig.get(URI).then((res) => {
     dispatch({
      type: APPLY_FILTERS,
      payload: res.data,
    });
  });
  return dispatch({
            type: LOADING_STOP,
            payload: { status: false, percent: 100 },
        }); 
};
