import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import VisibleList from "./containers/VisibleList";
import ClientDetailContainer from "./containers/ClientDetailContainer";

const App = () => {
  return (
    <Segment>
      <Grid columns={2} divided>
        <Grid.Column width={4}>
          <VisibleList />
        </Grid.Column>
        <Grid.Column width={12}>
          <ClientDetailContainer />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default App;
