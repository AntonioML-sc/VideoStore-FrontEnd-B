import React from 'react'
import './UserCard.scss'
import Card from 'react-bootstrap/Card';

const UserCard = props => {

    return (
        // <div className="UserCard">
        //     {/* <img className='UserCardImg' src={props.data.image} alt={props.data.title} /> */}
        //     <div className='dato'>Name:</div><div className='datoUser'>{props.data.name}</div>
        //     <div className='dato'>Id:</div><div className='datoUser'>{props.data.id}</div>
        //     <div className='dato'>E-mail:</div><div className='datoUser'>{props.data.email}</div>
        //     <div className='dato'>Phone:</div><div className='datoUser'>{props.data.phone}</div>
        //     <div className='dato'>Address:</div><div className='datoUser'>{props.data.address}</div>
        //     <div className='dato'>Role:</div><div className='datoUser'>{props.data.role}</div>
        //     <div className='dato'>Created At:</div><div className='datoUser'>{props.data.createdAt}</div>
        // </div>
        <Card style={{ width: '22rem' }} >
        <Card.Body className="UserCard">
          <Card.Text ><strong>Name:</strong><br />{props.data.name}</Card.Text>
          <Card.Text><strong>ID:</strong><br />{props.data.id}</Card.Text>
          <Card.Text><strong>Email:</strong><br />{props.data.email}</Card.Text>
          <Card.Text><strong>Phone:</strong><br />{props.data.phone}</Card.Text>
          <Card.Text><strong>Address:</strong><br />{props.data.address}</Card.Text>
          <Card.Text><strong>Role:</strong><br />{props.data.role}</Card.Text>
          <Card.Text><strong>Created At:</strong><br />{props.data.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserCard