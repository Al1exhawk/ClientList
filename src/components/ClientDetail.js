import React from "react";
import { Card, Image } from "semantic-ui-react";

function ClientDetail(props) {
  const { general, job, contact, address } = props.client;
  return (
    <div>
      {props.client.general !== undefined && (
        <Card centered fluid>
          <Card.Content>
            <Image circular floated="left" src={general.avatar} />
            <Card.Header textAlign="center">
              <h1>
                {general.firstName} {general.lastName}
              </h1>
              <p>
                {job.title} - {job.company}
              </p>
            </Card.Header>
          </Card.Content>
        </Card>
      )}
    </div>
  );
}
export default ClientDetail;
