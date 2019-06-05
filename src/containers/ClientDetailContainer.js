import ClientDetail from "../components/ClientDetail";
import { connect } from "react-redux";

export default connect(
  state => ({ client: state.exactClient }),
  null
)(ClientDetail);
