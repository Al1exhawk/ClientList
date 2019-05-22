import { GET_CLIENT_LIST, GET_CLIENT } from "../actionCreators/clientActions";

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
