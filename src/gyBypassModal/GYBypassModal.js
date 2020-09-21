import React from "react";
import { Modal } from 'react-bootstrap';

function GYBypassModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GY Bypass
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Home</button>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Visiting</button>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Roaming</button>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default GYBypassModal;