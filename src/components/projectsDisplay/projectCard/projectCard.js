import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const projectCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPtPSY1t7gAhU0IbkGHZn8AZcQjRx6BAgBEAU&url=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Flake&psig=AOvVaw3I8MIis2P1EW3A29iA-q8n&ust=1551451723605182" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default projectCard;
