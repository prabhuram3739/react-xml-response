import React, {createRef} from "react";
import { Modal } from 'react-bootstrap';

function GYInlineModal(props) {
    const [showHomeMsg, setShowHomeMsg] = React.useState(false);
    const [showVisitingMsg, setShowVisitingMsg] = React.useState(false);
    const [showRoamingMsg, setShowRoamingMsg] = React.useState(false);
    const [showSubmitMsg, setSubmitMsg] = React.useState(false);

    const apnNameRef = createRef();
    const homeRef = createRef();
    const visitingRef = createRef();
    const roamingRef = createRef();

    const onHomeClick = (() => { 
      const homeValue = homeRef.current.value;

      if(homeValue !== "") {
          return setShowHomeMsg(false);
      } else {
        return setShowHomeMsg(true);
      }
    });
    const onHomeInput = (() => { 
      setShowHomeMsg(false);
      setShowVisitingMsg(false);
      setShowRoamingMsg(false);
    });

    const onVisitingClick = (() => { 
      const visitingValue = visitingRef.current.value;

      if(visitingValue !== "") {
          return setShowVisitingMsg(false);
      } else {
        return setShowVisitingMsg(true);
      }
    });
    const onVisitingInput = (() => { 
      setShowHomeMsg(false);
      setShowVisitingMsg(false);
      setShowRoamingMsg(false);
    });

    const onRoamingClick = (() => { 
      const roamingValue = roamingRef.current.value;

      if(roamingValue !== "") {
          return setShowRoamingMsg(false);
      } else {
        return setShowRoamingMsg(true);
      }
    });
    const onRoamingInput = (() => { 
      setShowHomeMsg(false);
      setShowVisitingMsg(false);
      setShowRoamingMsg(false);
    });

    const onSubmitClick = (e) => {
        const apnNameValue = apnNameRef.current.value;
        const homeRefValue = homeRef.current.value;
        const visitingRefValue = visitingRef.current.value;
        const roamingRefValue = roamingRef.current.value;

    if(((apnNameValue !== "") && (homeRefValue || visitingRefValue || roamingRefValue)) === "") {
          setSubmitMsg(true);
          e.preventDefault();
        } else {
          setSubmitMsg(false);
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
            GY Inline
            { showSubmitMsg ? <div className="headerMsgText mt-0">At least one of Home, Visiting or Roaming should be entered.</div> : null }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  onSubmit={onSubmitClick}>
        <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name<span className="asterixColor">*</span></span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" ref={apnNameRef} aria-describedby="basic-addon1" required />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Home</span>
        </div>
        <input type="text" className="form-control" placeholder="Home" aria-label="home" aria-describedby="basic-addon1" ref={homeRef} onClick={onHomeClick} onInput={onHomeInput} />
        </div>
        { showHomeMsg ? <div className="msgText">! At least one of Home, Visiting or Roaming should be entered.</div> : null }
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Visiting</span>
        </div>
        <input type="text" className="form-control" placeholder="Visiting" aria-label="visiting" aria-describedby="basic-addon1" ref={visitingRef} onClick={onVisitingClick} onInput={onVisitingInput} />
        </div>
        { showVisitingMsg ? <div className="msgText">! At least one of Home, Visiting or Roaming should be entered.</div> : null }
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Roaming</span>
        </div>
        <input type="text" className="form-control" placeholder="Roaming" aria-label="roaming" aria-describedby="basic-addon1"  ref={roamingRef} onClick={onRoamingClick} onInput={onRoamingInput} />
        </div>
        { showRoamingMsg ? <div className="msgText">! At least one of Home, Visiting or Roaming should be entered.</div> : null }
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