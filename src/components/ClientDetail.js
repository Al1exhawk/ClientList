import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";

function ClientDetail(props) {
  const { general, job, contact, address } = props.client;
  return (
    <div>
      {props.client.general !== undefined && (
        <Card fluid>
          <Card.Content textAlign="left">
            <Grid columns={2}>
              <Grid.Column width={2}>
                <Image circular floated="left" src={general.avatar} />
              </Grid.Column>
              <Grid.Column>
                <Card.Header textAlign="center">
                  <h1>
                    {general.firstName} {general.lastName}
                  </h1>
                  <h3>
                    {job.title} - {job.company}
                  </h3>
                </Card.Header>
                <Card.Group centered itemsPerRow="1">
                  <Card>
                    <Card.Content>
                      <Card.Header as="h5">Contact`s</Card.Header>
                      <Card.Description>
                        Email: {contact.email}
                      </Card.Description>
                      <Card.Description>
                        Phone: {contact.phone}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Content>
                      <Card.Header as="h5">Address</Card.Header>
                      <Card.Description>
                        Country: {address.country}
                      </Card.Description>
                      <Card.Description>City: {address.city}</Card.Description>
                      <Card.Description>
                        Street: {address.street}
                      </Card.Description>
                      <Card.Description>
                        ZipCode: {address.zipCode}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      )}
    </div>
  );
}
export default ClientDetail;
