import React from "react";
import { Modal } from 'react-bootstrap';

function GAModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GA - Add/Modify
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GA Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GA Profile" aria-label="gaProfile" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <button className="btn btn-primary" type="button">Charging</button>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default GAModal;