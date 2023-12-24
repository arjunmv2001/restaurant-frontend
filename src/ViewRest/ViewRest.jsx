import React, { useEffect, useState } from 'react';
import './ViewRest.css';
import { useParams } from 'react-router-dom';
import { base_url } from '../Base_url';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';

function ViewRest() {
  const { id } = useParams();
  const [restDetails, setRestDetails] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${base_url}/restaurants/${id}`);
      setRestDetails(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {restDetails ? (
        <div className='row' style={{ width: '100%' }}>
          <div className='col-md-6' >
            <div className='m-5'>
              <Image className='image-fluid'
                style={{ border: '5px dashed white', width: '100%', height: '500px' }}
                src={restDetails.photograph}
              />
            </div>
          </div>
          <div className='col-md-6' >
            <MDBListGroup className='mt-5 overflow-x-hidden' light>
              <h1 className='text-light'>{restDetails.name}</h1>
              <MDBListGroupItem tag='button' action noBorders className='px-3'>
                Address: {restDetails.address}
              </MDBListGroupItem>
              <MDBListGroupItem tag='button' action noBorders className='px-3'>
                Cuisine Type: {restDetails.cuisine_type}
              </MDBListGroupItem>
              <MDBListGroupItem tag='button' action noBorders className='px-3'>
                Neighborhood: {restDetails.neighborhood}
              </MDBListGroupItem>
              <MDBListGroupItem tag='button' action noBorders className='px-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <RestOp op={restDetails.operating_hours} />
              </MDBListGroupItem>
              <MDBListGroupItem tag='button' action noBorders className='px-3'>
                <RestReview rs={restDetails.reviews} />
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        </div>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default ViewRest;
