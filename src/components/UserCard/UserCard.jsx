import React from 'react'
import './UserCard.scss'

const UserCard = props => {

    return (
        <div  className="UserCard" style={{ width: '22rem' }} >
        <div className="CardBody">
          <div><strong>Name:</strong><br />{props.data.name}</div>
          <div><strong>ID:</strong><br />{props.data.id}</div>
          <div><strong>Email:</strong><br />{props.data.email}</div>
          <div><strong>Phone:</strong><br />{props.data.phone}</div>
          <div><strong>Address:</strong><br />{props.data.address}</div>
          <div><strong>Role:</strong><br />{props.data.role}</div>
          <div><strong>Created At:</strong><br />{props.data.createdAt}</div>
        </div>
      </div>
    )
}

export default UserCard