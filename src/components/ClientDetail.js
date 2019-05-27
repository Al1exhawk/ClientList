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
          <Card.Group centered itemsPerRow="1">
            <Card>
              <Card.Content>
                <Card.Header as="h5">Contact`s</Card.Header>
                <Card.Description>Email: {contact.email}</Card.Description>
                <Card.Description>Phone: {contact.phone}</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header as="h5">Addres</Card.Header>
                <Card.Description>Country: {address.country}</Card.Description>
                <Card.Description>City: {address.city}</Card.Description>
                <Card.Description>Street: {address.street}</Card.Description>
                <Card.Description>ZipCode: {address.zipCode}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Card>
      )}
    </div>
  );
}
export default ClientDetail;
