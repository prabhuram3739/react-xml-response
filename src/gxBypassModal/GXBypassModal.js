import React from "react";
import { Modal } from 'react-bootstrap';

function GXBypassModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GX Bypass
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
        <div className="row">
        <div className="col-12">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name<span className="asterixColor">*</span></span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" required />
        </div>
        </div>
        </div>

        <div className="row pull-right mb-3">
        <div className="col-6">
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary btn-block" type="button" onClick={props.onHide}>Cancel</button>
        </div>
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    );
  }

  export default GXBypassModal;