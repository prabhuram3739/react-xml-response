import React, {createRef} from "react";
import { Modal } from 'react-bootstrap';

function GIDNSModal(props) {
  const [showSubmitOnlyAPNMsg, setShowSubmitOnlyAPNMsg] = React.useState(false);
  const apnInputRef = createRef();
  const primaryPeerRef = createRef();
  const secondaryPeerRef = createRef();
  const onSubmitClick = (e) => {
    e.preventDefault();
    const apnName = apnInputRef.current.value;
    const primaryPeerName = primaryPeerRef.current.value;
    const secondaryPeerName = secondaryPeerRef.current.value;

    if((apnName !== "") && ((primaryPeerName && secondaryPeerName) === "")) {
        return setShowSubmitOnlyAPNMsg(true);
    }
};
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

            { showSubmitOnlyAPNMsg ? <div className="msgText mt-0">At least one of Primary or Secondary IP required</div> : null }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmitClick}>
        <div className="row">
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">APN Name<span className="asterixColor">*</span></span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" ref={apnInputRef} required />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary IP" aria-label="primaryIP" aria-describedby="basic-addon1" ref={primaryPeerRef} />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary IP" aria-label="secondaryIP" aria-describedby="basic-addon1" ref={secondaryPeerRef} />
        </div>
        </div>
        </div>
        <div className="row pull-right mb-3">
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="submit">Modify</button>
        </div>
        <div className="col-6">
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