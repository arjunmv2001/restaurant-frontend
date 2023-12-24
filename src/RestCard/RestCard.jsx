import React, { Component } from 'react';
import './RestCard.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class RestCard extends Component {
  render() {
    const { restaurants } = this.props;

    return (
      <div className='container'>
        <Link style={{ textDecoration: 'none' }} to={`view/${restaurants.id}`}>
          <MDBCard className='card' style={{ width: '100%', height:'350px', margin: '30px' }}>
            <MDBCardImage src={restaurants.photograph} alt='...' style={{ width: '100%', height:'200px' }} />
            <MDBCardBody>
              <MDBCardTitle className='text-light fw-bold'>{restaurants.name}</MDBCardTitle>
              <MDBCardText className='text'>
                Address: {restaurants.address} <br />
                Cuisine Type: {restaurants.cuisine_type}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </div>
    );
  }
}

export default RestCard;
