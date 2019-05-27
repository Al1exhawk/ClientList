import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Input, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  getClientList,
  getClient
} from "./actionCreators/clientsActionsCreator";
import ClientList from "./components/ClientList";
import ClientDetail from "./components/ClientDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      filtredlist: []
    };
    this.onSearchInputchange = this.onSearchInputchange.bind(this);
  }
  componentDidMount() {
    this.props.getClientList();
  }
  onSearchInputchange(e) {
    const { value } = e.target;
    const { clientList } = this.props;

    this.setState({
      //Filter
      searchValue: { value },
      filtredlist: clientList.filter(client => {
        return JSON.stringify(client)
          .toLowerCase()
          .includes(value.toLowerCase());
      })
    });
  }

  render() {
    const { clientList, exactClient, getClient } = this.props;
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={4}>
            <Input
              placeholder="Search..."
              onChange={this.onSearchInputchange}
            />
            <ClientList
              list={
                this.state.searchValue !== ""
                  ? this.state.filtredlist
                  : clientList
              }
              onClickAction={getClient}
            />
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
  { getClientList, getClient }
)(App);
