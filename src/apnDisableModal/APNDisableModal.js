import React from "react";
import { Modal } from 'react-bootstrap';

function ApnDisableModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            APN Disable Warning
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-12">
            <p className="alert alert-danger">This will bring down all ongoing sessions of this APN. Do you want to continue?</p>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row pull-right">
          <div className="col-6">
        <button className="btn btn-primary pull-right" type="button">Continue</button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button" onClick={props.onHide}>Cancel</button>
        </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ApnDisableModal;