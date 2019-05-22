import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Search, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { getClientList } from "./actionCreators/clientsActionsCreator";
import ClientList from "./components/ClientList";

const initialState = {
  isLoading: false,
  results: [],
  value: ""
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    this.props.getClientList();
  }

  render() {
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <Search placeholder="Search..." />
            <ClientList list={this.props.clientList} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(
  state => ({
    clientList: state.clientList
  }),
  { getClientList }
)(App);
