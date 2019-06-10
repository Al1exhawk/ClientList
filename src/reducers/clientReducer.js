import {
  GET_CLIENT_LIST,
  GET_CLIENT,
  FILTER_ON
} from "../actionCreators/clientActions";

const initialState = {
  clientList: [],
  exactClient: {},
  value: ""
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
    case FILTER_ON: {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
