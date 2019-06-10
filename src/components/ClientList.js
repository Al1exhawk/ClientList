import React, { useEffect } from "react";
import { List, Input } from "semantic-ui-react";
import Client from "./Client";

export default function ClientList(props) {
  const { getClientList } = props;
  useEffect(() => {
    getClientList();
  }, []);
  const onSearchChange = e => {
    props.filterOn(e.target.value);
  };
  return (
    <div>
      <Input placeholder="Search..." onChange={onSearchChange} />
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
    </div>
  );
}
