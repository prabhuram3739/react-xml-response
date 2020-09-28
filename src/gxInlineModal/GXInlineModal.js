import React, {createRef} from "react";
import { Modal } from 'react-bootstrap';

function GXInlineModal(props) {
    const [showGXProfileMsg, setShowGXProfileMsg] = React.useState(false);
    const [showPrimaryPeerMsg, setShowPrimaryPeerMsg] = React.useState(false);
    const [showSecondaryPeerMsg, setShowSecondaryPeerMsg] = React.useState(false);
    const [showDiameterPeerMsg, setShowDiameterPeerMsg] = React.useState(false);
    const [showSubmitOnlyAPNMsg, setShowSubmitOnlyAPNMsg] = React.useState(false);
    const [showSubmitOnlyAPNGXPriofileMsg, setShowSubmitOnlyAPNGXProfileMsg] = React.useState(false);
    const onGXProfileClick = () => setShowGXProfileMsg(true);
    const onGXProfileInput = () => setShowGXProfileMsg(false);

    const apnInputRef = createRef();
    const gxProfileRef = createRef();
    const primaryPeerRef = createRef();
    const secondaryPeerRef = createRef();
    const diameterPeerRef = createRef();

    const onPrimaryPeerClick = (() => { 
      setShowPrimaryPeerMsg(true);

      const primaryValue = primaryPeerRef.current.value;

      if(primaryValue !== "") {
          return setShowPrimaryPeerMsg(false);
      } else {
        return setShowPrimaryPeerMsg(true);
      }
    });
    const onPrimaryPeerInput = (() => { 
      setShowPrimaryPeerMsg(false);
      setShowSecondaryPeerMsg(false);
      setShowDiameterPeerMsg(false);
      setShowSubmitOnlyAPNMsg(false);
    });

    const onSecondaryPeerClick = (() => { 
      setShowSecondaryPeerMsg(true);

      const secondaryValue = secondaryPeerRef.current.value;

      if(secondaryValue !== "") {
          return setShowSecondaryPeerMsg(false);
      } else {
        return setShowSecondaryPeerMsg(true);
      }
    });
    const onSecondaryPeerInput = (() => { 
      setShowPrimaryPeerMsg(false);
      setShowSecondaryPeerMsg(false);
      setShowDiameterPeerMsg(false);
      setShowSubmitOnlyAPNMsg(false);
    });


    const onDiameterPeerClick = (() => { 
      setShowDiameterPeerMsg(true);

      const diameterValue = diameterPeerRef.current.value;

      if(diameterValue !== "") {
          return setShowDiameterPeerMsg(false);
      } else {
        return setShowDiameterPeerMsg(true);
      }
    });
    const onDiameterPeerInput = (() => { 
      setShowPrimaryPeerMsg(false);
      setShowSecondaryPeerMsg(false);
      setShowDiameterPeerMsg(false);
      setShowSubmitOnlyAPNMsg(false);
    });

    const onSubmitClick = (e) => {
        const gxProfileName = gxProfileRef.current.value;
        const primaryPeerName = primaryPeerRef.current.value;
        const secondaryPeerName = secondaryPeerRef.current.value;
        const diameterPeerName = diameterPeerRef.current.value;

         if(!primaryPeerName.trim() && !secondaryPeerName.trim() && !diameterPeerName.trim()) {
          setShowSubmitOnlyAPNGXProfileMsg(false);
          setShowSubmitOnlyAPNMsg(true);
          e.preventDefault();
        } 
        if((!gxProfileName.trim()) && (primaryPeerName && secondaryPeerName && diameterPeerName)) {
          setShowSubmitOnlyAPNMsg(false);
          setShowSubmitOnlyAPNGXProfileMsg(true);
          e.preventDefault();
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
            GX Inline
            { showSubmitOnlyAPNMsg ? <div className="headerMsgText mt-0">At least one of Primary or Secondary Diameter peer name required OR Diameter Peer Group name is required.</div> : null }
            { showSubmitOnlyAPNGXPriofileMsg ? <div className="headerMsgText mt-0">At least one of Primary or Secondary Diameter peer name required OR Diameter Peer Group name is required.</div> : null }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmitClick}>
        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">APN Name<span className="asterixColor">*</span></span>
        </div>
        <input type="text" className="form-control" placeholder="APN Name" aria-label="apnName" aria-describedby="basic-addon1" ref={apnInputRef} required />
        </div>
        </div>
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GX Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GX Profile" aria-label="gxProfile" aria-describedby="basic-addon1" ref={gxProfileRef} onClick={onGXProfileClick} onInput={onGXProfileInput} />
        </div>
        { showGXProfileMsg ? <div className="msgText">! GX Profile is optional</div> : null }
        </div>
        </div>

        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary Diameter Peer" aria-label="primaryDiameterPeer" aria-describedby="basic-addon1" ref={primaryPeerRef} onClick={onPrimaryPeerClick} onInput={onPrimaryPeerInput} />
        </div>
        { showPrimaryPeerMsg ? <div className="msgText">! At least one of Primary or Secondary Diameter peer name is required.</div> : null }
        </div>
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary Diameter Peer" aria-label="secondaryDiameterPeer" ref={secondaryPeerRef} aria-describedby="basic-addon1" onClick={onSecondaryPeerClick} onInput={onSecondaryPeerInput} />
        </div>
        { showSecondaryPeerMsg ? <div className="msgText">! At least one of Primary or Secondary Diameter peer name is required.</div> : null }
        </div>
        </div>

        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Diameter Group Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Diameter Group Peer" aria-label="diameterGroupPeer" aria-describedby="basic-addon1" ref={diameterPeerRef} onClick={onDiameterPeerClick} onInput={onDiameterPeerInput} />
        </div>
        { showDiameterPeerMsg ? <div className="msgText">! Diameter group peer is not required if at least one of Primary or Secondary Diameter peer name is provided.</div> : null }
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