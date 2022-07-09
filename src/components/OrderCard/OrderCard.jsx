import React from 'react'
import './OrderCard.scss'
import Card from 'react-bootstrap/Card';

const OrderCard = props => {
    const fromDate = new Date(props.data.FromDate).toLocaleDateString();
    const untilDate = new Date(props.data.UntilDate).toLocaleDateString();

    return (
        <Card style={{ width: '22rem' }} >
            <Card.Body className="OrderCard">
                <Card.Text ><strong>Movie: </strong>{props.data.Movie}</Card.Text>
                <Card.Text><strong>From: </strong>{fromDate}</Card.Text>
                <Card.Text><strong>Until: </strong>{untilDate}</Card.Text>
                <Card.Text><strong>Price: </strong>{props.data.Price} €</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default OrderCard