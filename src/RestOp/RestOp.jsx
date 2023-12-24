import React, { useState } from 'react'
import './RestOp.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';



function RestOp({op}) {
  console.log(op); //Timing details
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <p variant="primary" onClick={handleShow}>
        Operating Hours
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem>Monday : {op?.Monday}</MDBListGroupItem>
      <MDBListGroupItem>Tuesday : {op?.Tuesday}</MDBListGroupItem>
      <MDBListGroupItem>Wednesday : {op?.Wednesday}</MDBListGroupItem>
      <MDBListGroupItem>Thursday : {op?.Thursday}</MDBListGroupItem>
      <MDBListGroupItem>Friday : {op?.Friday}</MDBListGroupItem>
      <MDBListGroupItem>Saturday : {op?.Saturday}</MDBListGroupItem>
      <MDBListGroupItem>Sunday : {op?.Sunday}</MDBListGroupItem>
      <MDBListGroupItem></MDBListGroupItem>
    </MDBListGroup>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default RestOp