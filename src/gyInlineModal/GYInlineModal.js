import React from "react";
import { Modal } from 'react-bootstrap';

function GYInlineModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GY Inline
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
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Home</span>
        </div>
        <input type="text" className="form-control" placeholder="Home" aria-label="home" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Visiting</span>
        </div>
        <input type="text" className="form-control" placeholder="Visiting" aria-label="visiting" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Roaming</span>
        </div>
        <input type="text" className="form-control" placeholder="Roaming" aria-label="roaming" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="row pull-right mb-3">
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button">Submit</button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button" onClick={props.onHide}>Cancel</button>
        </div>
        </div>
        </Modal.Footer>
      </Modal>
    );
  }

  export default GYInlineModal;