import React from 'react'
import './OrderCard.scss'

const OrderCard = props => {
    const fromDate = new Date(props.data.FromDate).toLocaleDateString();
    const untilDate = new Date(props.data.UntilDate).toLocaleDateString();

    return (
        <div className="OrderCard">
            <div className="CardBody">
                <div><strong>Movie: </strong>{props.data.Movie}</div>
                <div><strong>From: </strong>{fromDate}</div>
                <div><strong>Until: </strong>{untilDate}</div>
                <div><strong>Price: </strong>{props.data.Price} €</div>
            </div>
        </div>
    )
}

export default OrderCard