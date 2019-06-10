import ClientList from "../components/ClientList";
import {
  getClient,
  getClientList,
  filterOn
} from "../actionCreators/clientsActionsCreator";
import { connect } from "react-redux";

const filter = (list, value) => {
  return list.filter(client => {
    return Object.keys(client).some(key => {
      return Object.keys(client[key]).some(key2 => {
        return client[key][key2].toLowerCase().includes(value.toLowerCase());
      });
    });
  });
};

export default connect(
  state => ({
    list: filter(state.clientList, state.value)
  }),
  { onClickAction: getClient, getClientList, filterOn }
)(ClientList);
