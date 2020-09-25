import React from "react";
import { Modal } from 'react-bootstrap';

function GXInlineModal(props) {
    const [showGXProfileMsg, setShowGXProfileMsg] = React.useState(false);
    const [showPrimaryPeerMsg, setShowPrimaryPeerMsg] = React.useState(false);
    const [showDiameterPeerMsg, setShowDiameterPeerMsg] = React.useState(false);
    const onGXProfileClick = () => setShowGXProfileMsg(true);
    const onGXProfileInput = () => setShowGXProfileMsg(false);

    const onPrimaryPeerClick = () => setShowPrimaryPeerMsg(true);
    const onPrimaryPeerInput = () => setShowPrimaryPeerMsg(false);

    const onDiameterPeerClick = () => setShowDiameterPeerMsg(true);
    const onDiameterPeerInput = () => setShowDiameterPeerMsg(false);
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            GX Inline
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name*</span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GX Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GX Profile" aria-label="gxProfile" aria-describedby="basic-addon1" onClick={onGXProfileClick} onInput={onGXProfileInput} />
        </div>
        { showGXProfileMsg ? <div className="msgText">GX Profile is optional</div> : null }
        </div>
        </div>

        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary Diameter Peer" aria-label="primaryDiameterPeer" aria-describedby="basic-addon1" onClick={onPrimaryPeerClick} onInput={onPrimaryPeerInput} />
        </div>
        { showPrimaryPeerMsg ? <div className="msgText">At least one of Primary or Secondary Diameter peer name is required.</div> : null }
        </div>
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary Diameter Peer" aria-label="secondaryDiameterPeer" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Diameter Group Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Diameter Group Peer" aria-label="diameterGroupPeer" aria-describedby="basic-addon1" onClick={onDiameterPeerClick} onInput={onDiameterPeerInput} />
        </div>
        { showDiameterPeerMsg ? <div className="msgText">Diameter group peer is not required if at least one of Primary or Secondary Diameter peer name is provided.</div> : null }
        </div>
        </div>

        <div className="row pull-right">
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

  export default GXInlineModal;