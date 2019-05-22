import React from "react";
import { List, Image } from "semantic-ui-react";

export default function Client(props) {
  return (
    <List.Item>
      <Image avatar src={props.avatar} />
      <List.Content>
        <List.Header as="h4">{props.name}</List.Header>
        <List.Description>{props.job}</List.Description>
      </List.Content>
    </List.Item>
  );
}
