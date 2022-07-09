import React from 'react'
import './OrderCard.scss'
import Card from 'react-bootstrap/Card';

const OrderCard = props => {

    return (
        <Card style={{ width: '22rem' }} >
        <Card.Body className="OrderCard">
          <Card.Text ><strong>Movie: </strong>{props.data.Movie}</Card.Text>
          <Card.Text><strong>From: </strong>{props.data.FromDate}</Card.Text>
          <Card.Text><strong>Until: </strong>{props.data.UntilDate}</Card.Text>
          <Card.Text><strong>Price: </strong>{props.data.Price} €</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default OrderCard