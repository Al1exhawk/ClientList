import {
  GET_CLIENT_LIST,
  GET_CLIENT,
  FILTER_LIST
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
export const filterList = searchValue => dispatch => {
  dispatch({
    type: FILTER_LIST,
    payload: searchValue
  });
};
export const getClient = key => dispatch => {
  dispatch({
    type: GET_CLIENT,
    payload: key
  });
};
