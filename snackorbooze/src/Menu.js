import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ items, title }) {
  const titleLow = title.toLowerCase();
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText className="text-center">
            Behold our tasty offerings!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${titleLow}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Link to={`/${titleLow}/add`} className="mt-4 d-block mx-auto" size="sm">
            + Add {title.slice(0, - 1)}
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
