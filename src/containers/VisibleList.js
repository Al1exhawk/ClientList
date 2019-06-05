import ClientList from "../components/ClientList";
import {
  getClient,
  getClientList
} from "../actionCreators/clientsActionsCreator";
import { connect } from "react-redux";

export default connect(
  state => ({
    list: state.clientList
  }),
  { onClickAction: getClient, getClientList }
)(ClientList);
