import React from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { getClient } from "../actionCreators/clientsActionsCreator";
const Client = props => {
  const onClientClick = () => {
    props.getClient(props.name);
  };
  return (
    <List.Item onClick={onClientClick}>
      <Image avatar size="tiny" src={props.avatar} />
      <List.Content>
        <List.Header as="h4">{props.name}</List.Header>
        <List.Description>{props.job}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default connect(
  null,
  { getClient }
)(Client);
