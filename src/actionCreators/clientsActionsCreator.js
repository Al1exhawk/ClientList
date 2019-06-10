import {
  GET_CLIENT_LIST,
  GET_CLIENT,
  FILTER_ON
} from "../actionCreators/clientActions";

export const getClientList = () => dispatch => {
  const req = new XMLHttpRequest();
  req.open("GET", "clients.json", true);
  req.send();
  req.onload = () => {
    const clientList = JSON.parse(req.responseText);
    dispatch({
      type: GET_CLIENT_LIST,
      payload: clientList
    });
  };
};

export const getClient = key => dispatch => {
  dispatch({
    type: GET_CLIENT,
    payload: key
  });
};

export const filterOn = value => dispatch => {
  dispatch({
    type: FILTER_ON,
    payload: value
  });
};
