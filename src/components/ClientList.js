import React, { useEffect } from "react";
import { List } from "semantic-ui-react";
import Client from "./Client";

export default function ClientList(props) {
  const { getClientList } = props;
  useEffect(() => {
    getClientList();
  }, []);
  return (
    <List celled animated>
      {props.list.map((client, index) => {
        return (
          <Client
            id={index}
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
