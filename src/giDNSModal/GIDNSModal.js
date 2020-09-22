import React from "react";
import { Modal } from 'react-bootstrap';

function GIDNSModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GI DNS - Add/Modify
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="row">
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary IP" aria-label="primaryIP" aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary IP" aria-label="secondaryIP" aria-describedby="basic-addon1" required />
        </div>
        </div>
        </div>
        <div className="row pull-right mb-3">
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="submit">Add</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="submit">Modify</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button" onClick={props.onHide}>Cancel</button>
        </div>
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    );
  }

  export default GIDNSModal;