import React, {createRef} from "react";
import { Modal } from 'react-bootstrap';

function GYInlineModal(props) {
    const [showHomeMsg, setShowHomeMsg] = React.useState(false);
    const [showVisitingMsg, setShowVisitingMsg] = React.useState(false);
    const [showRoamingMsg, setShowRoamingMsg] = React.useState(false);

    const onHomeClick = () => setShowHomeMsg(true);
    const onHomeInput = () => setShowHomeMsg(false);

    const onVisitingClick = () => setShowVisitingMsg(true);
    const onVisitingInput = () => setShowVisitingMsg(false);

    const onRoamingClick = () => setShowRoamingMsg(true);
    const onRoamingInput = () => setShowRoamingMsg(false);

    const homeRef = createRef();
    const visitingRef = createRef();
    const roamingRef = createRef();

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
            <form>
        <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name<span className="asterixColor">*</span></span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Home</span>
        </div>
        <input type="text" className="form-control" placeholder="Home" aria-label="home" aria-describedby="basic-addon1" ref={homeRef} onClick={onHomeClick} onInput={onHomeInput} />
        </div>
        { showHomeMsg ? <div className="msgText">At least one of Home, Visiting or Roaming should be entered.</div> : null }
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Visiting</span>
        </div>
        <input type="text" className="form-control" placeholder="Visiting" aria-label="visiting" aria-describedby="basic-addon1" ref={visitingRef} onClick={onVisitingClick} onInput={onVisitingInput} />
        </div>
        { showVisitingMsg ? <div className="msgText">At least one of Home, Visiting or Roaming should be entered.</div> : null }
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Roaming</span>
        </div>
        <input type="text" className="form-control" placeholder="Roaming" aria-label="roaming" aria-describedby="basic-addon1"  ref={roamingRef} onClick={onRoamingClick} onInput={onRoamingInput} />
        </div>
        { showRoamingMsg ? <div className="msgText">At least one of Home, Visiting or Roaming should be entered.</div> : null }
        </div>
        </div>
        <div className="row pull-right mb-3">
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="submit">Submit</button>
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

  export default GYInlineModal;