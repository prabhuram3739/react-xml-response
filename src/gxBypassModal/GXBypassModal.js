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
        <div className="row">
        <div className="col-12">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row mb-3">
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API Shutdown</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Dynamic PCC</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Primary Diameter peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Secondary Diam. Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Diameter Group Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API No Shutdown</button>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default GXBypassModal;