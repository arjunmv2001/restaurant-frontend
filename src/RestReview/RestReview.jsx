import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function RestReview({ rs, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name} Reviews
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {rs?.map((item, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <p>Name: {item.name}</p>
              <p>Date: {item.date}</p>
              <p>Comments: {item.comments}</p>
              <p>Rating: {item.rating}</p>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default RestReview;
