import React from "react";
import { Modal } from 'react-bootstrap';

function ApnEnableDisableModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            APN Enable/Disable
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-12">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name</span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row pull-right">
          <div className="col-4">
        <button className="btn btn-primary pull-right" type="button">Enable</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button">Disable</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button" onClick={props.onHide}>Cancel</button>
        </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ApnEnableDisableModal;