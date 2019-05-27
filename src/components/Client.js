import React from "react";
import { List, Image, Card } from "semantic-ui-react";

const Client = props => {
  const onClientClick = () => {
    props.onClickAction(props.name);
  };
  return (
    <List.Item onClick={onClientClick}>
      <Image avatar size="tiny" src={props.avatar} />
      <List.Content>
        <List.Header as="h4">{props.name}</List.Header>
        <List.Description as="p">{props.job}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default Client;
