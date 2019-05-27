import { GET_CLIENT_LIST, GET_CLIENT } from "../actionCreators/clientActions";

const initialState = {
  clientList: [],
  exactClient: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENT_LIST: {
      return { ...state, clientList: action.payload };
    }
    case GET_CLIENT: {
      return {
        ...state,
        exactClient: state.clientList.filter(client => {
          return client.general.firstName === action.payload;
        })[0]
      };
    }

    default:
      return state;
  }
};
