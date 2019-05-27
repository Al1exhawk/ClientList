import React from "react";
import { List } from "semantic-ui-react";
import Client from "./Client";

export default function ClientList(props) {
  return (
    <List celled animated>
      {props.list.map((client, index) => {
        return (
          <Client
            onClickAction={props.onClickAction}
            key={index}
            avatar={client.general.avatar}
            name={client.general.firstName}
            job={client.job.title}
          />
        );
      })}
    </List>
  );
}
