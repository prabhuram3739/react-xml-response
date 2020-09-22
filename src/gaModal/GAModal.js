import React from "react";
import { Modal } from 'react-bootstrap';

function GAModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GA - Add/Modify
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GA Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GA Profile" aria-label="gaProfile" aria-describedby="basic-addon1" required />
        </div>
        </div>
        </div>

        <div className="row pull-right">
                <div className="col-6">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" type="button" onClick={props.onHide}>Cancel</button>
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    );
  }

  export default GAModal;