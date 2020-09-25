import React from "react";
import { Modal } from 'react-bootstrap';
import GXBypassModal from '../gxBypassModal/GXBypassModal';

function ApnBypassShutdownModal(props) {
    const [ModalShow, setModalShow] = React.useState(false);
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GX Bypass - APN Shutdown Warning
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
        <div className="col-12">
            <p className="alert alert-danger">APN shutdown required for this action. Existing sessions need to be removed manually. Do you want to continue?</p>
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row pull-right">
          <div className="col-6">
        <button className="btn btn-primary pull-right" type="button" onClick={() => setModalShow(true)}>Continue</button>
        <GXBypassModal show={ModalShow} onHide={() => { setModalShow(false);  props.onHide(false); }} />
        </div>
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button" onClick={props.onHide}>Cancel</button>
        </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ApnBypassShutdownModal;