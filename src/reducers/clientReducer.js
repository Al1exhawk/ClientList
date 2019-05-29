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
        exactClient: state.clientList.find(client => {
          return client.general.firstName === action.payload;
        })
      };
    }

    default:
      return state;
  }
};
