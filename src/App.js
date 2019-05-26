import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Input, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  getClientList,
  filterList
} from "./actionCreators/clientsActionsCreator";
import ClientList from "./components/ClientList";
import ClientDetail from "./components/ClientDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchInputchange = this.onSearchInputchange.bind(this);
  }
  onSearchInputchange(e) {
    const { value } = e.target;
    console.log(value);
  }
  componentDidMount() {
    this.props.getClientList();
  }

  render() {
    const { clientList, exactClient } = this.props;
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={4}>
            <Input
              placeholder="Search..."
              onChange={this.onSearchInputchange}
            />
            <ClientList list={clientList} />
          </Grid.Column>
          <Grid.Column width={12}>
            <ClientDetail client={exactClient} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default connect(
  state => ({
    clientList: state.clientList,
    exactClient: state.exactClient
  }),
  { getClientList, filterList }
)(App);
