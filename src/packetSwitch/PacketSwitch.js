import React  from 'react';
import Loader from 'react-loader-spinner';

export default class PacketSwitch extends React.Component {
    render() {
        // Get the data from the context api to manipulate the data for the circuit view
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       // Check if the count is zero or undefined to display the no records message
       if(!loading) {
       if((count === 0) || (count === undefined)) {
        return (
            <span className="ml-4">Sorry, No Packet Switch Information available</span>
        )
       }
    }
       return (

        <div className="container-fluid noPadding fontChange">
            {
                // Display loader till the response appears and check for the validity of the data If exists
                loading ? <div><div className="v-loading-indicator second v-loading-indicator-delay v-loading-indicator-wait" ></div><Loader className="centerDisplaySearchView centerDisplayPacketView mt-5" type="Circles" color="#00BFFF" height={40} width={40} /></div> :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <React.Fragment key={item.id}>
                        {/*<div key={item.id}>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">APN Requested:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.apnRequested}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Virtual APN:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.virtualApn}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">PDN Type:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.pdnType}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">UL APN AMBR:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ulApnAmbr}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">DL APN AMBR:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.dlApnAmbr}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">UE IPV4 Address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ueIpv4Address}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">S8 DL Bytes:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8DlBytes}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">SGI UL Bytes:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.sgiUlBytes}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Total Data Volume Used (MB):</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.totalDataVolumeUsed}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Primary DNS IPV4 Address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.primaryDnsIpv4Address}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Secondary DNS IPv4 address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.secondaryDnsIpv4Address}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Primary DNS IPv6 address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.primaryDnsIpv6Address}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Secondary DNS IPv6 address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.secondaryDnsIpv6Address}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">S8 PGW Data addr:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8PgwDataAddr}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">S8 SGW V4 Ctl Adr:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8SgwV4CtlAdr}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">S8 SGW Data Addr:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8SgwDataAddr}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Gx peer profile in use:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.gxPeerProfileInUse}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Gx failover count:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.gxFailoverCount}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF hostname:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfHostname}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfAddress}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF destination host:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfDestinationHost}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Rule Base Name:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ruleBaseName}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">SDF rule name:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.sdfRuleName}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">SDF precedence:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.sdfPrecedence}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">SDF rule name:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.sdfRuleName}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">SDF precedence:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.sdfPrecedence}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">DCCA Profile:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.dccaProfile}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Peer-profile In-use:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.peerProfileInUse}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Failover Count:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.failoverCount}  readOnly disabled /></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">OCS Address:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsAddress}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">OCS Destination Realm:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsDestinationRealm}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">OCS Destination Host:</label><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsDestinationHost}  readOnly disabled /></div>

                        
                        {item.packetSwitch.ratingGroupDataList.map((rating, index) => {
                        return(
                            <>
                        <div key={index} className="col-3">
                            <label className="fontBold">Rating Group:</label><input type="text" className="txtBoxHeight" value={rating.ratingGroup}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Used Total Octets:</label><input type="text" className="txtBoxHeight" value={rating.usedTotalOctets}  readOnly disabled /></div>
                        <div className="col-3">
                        <label className="fontBold">Diameter Code:</label><input type="text" className="txtBoxHeight" value={rating.diameterCode}  readOnly disabled /></div>
                        </>
                        )
                        })}
                        </div>
                        </div> */}


                        <div className="table-responsive">
                        <table className="table table-striped noBorderTableTD" key={index}>
                            <tbody>
                            <tr>
                            <td className="textAlignRight"><label className="fontBold">Up Time:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.upTime ? item.packetSwitch.upTime : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">RAT Type:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ratType ? item.packetSwitch.ratType : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">Location:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.networkMCCMNC? item.packetSwitch.networkMCCMNC.replace(/[ ,]+/g, ", ") : 'No Data Available'}  readOnly disabled /></td>
                        </tr>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">Network MCC:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.networkMCC ? item.packetSwitch.networkMCC : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">Network MNC:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.networkMNC ? item.packetSwitch.networkMNC : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">Cell ID:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.cellID ? item.packetSwitch.cellID : 'No Data Available'}  readOnly disabled /></td>
                        </tr>
                        
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">APN Requested:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.apnRequested ? item.packetSwitch.apnRequested : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Virtual APN:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.virtualApn ? item.packetSwitch.virtualApn : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">PDN Type:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.pdnType ? item.packetSwitch.pdnType : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">UL APN AMBR:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ulApnAmbr ? item.packetSwitch.ulApnAmbr : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">DL APN AMBR:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.dlApnAmbr ? item.packetSwitch.dlApnAmbr : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">UE IPV4 Address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ueIpv4Address ? item.packetSwitch.ueIpv4Address :  'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">S8 DL Bytes:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8DlBytes ? item.packetSwitch.s8DlBytes : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">SGI UL Bytes:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.sgiUlBytes ? item.packetSwitch.sgiUlBytes : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Total Data Volume Used (MB):</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.totalDataVolumeUsed ? item.packetSwitch.totalDataVolumeUsed : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Primary DNS IPV4 Address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.primaryDnsIpv4Address ? item.packetSwitch.primaryDnsIpv4Address : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Secondary DNS IPv4 address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.secondaryDnsIpv4Address ? item.packetSwitch.secondaryDnsIpv4Address : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Primary DNS IPv6 address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.primaryDnsIpv6Address ? item.packetSwitch.primaryDnsIpv6Address : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Secondary DNS IPv6 address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.secondaryDnsIpv6Address ? item.packetSwitch.secondaryDnsIpv6Address : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">S8 PGW Data addr:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8PgwDataAddr ? item.packetSwitch.s8PgwDataAddr : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">S8 SGW V4 Ctl Adr:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8SgwV4CtlAdr ? item.packetSwitch.s8SgwV4CtlAdr : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">S8 SGW Data Addr:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.s8SgwDataAddr ? item.packetSwitch.s8SgwDataAddr : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Gx peer profile in use:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.gxPeerProfileInUse ? item.packetSwitch.gxPeerProfileInUse : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Gx failover count:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.gxFailoverCount ? item.packetSwitch.gxFailoverCount : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">PCRF hostname:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfHostname ? item.packetSwitch.pcrfHostname : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">PCRF address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfAddress ? item.packetSwitch.pcrfAddress : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">PCRF destination host:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.pcrfDestinationHost ? item.packetSwitch.pcrfDestinationHost : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            
                                {(item.packetSwitch.ruleData !== null && item.packetSwitch.ruleData.length > 0) && item.packetSwitch.ruleData.sDFRulesList.map((rule, index) => {
                            return(
                            <tr key={index}>
                                <td className="textAlignRight"><label className="fontBold">Rule Base Name:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ruleData.ruleBaseName ? item.packetSwitch.ruleData.ruleBaseName : 'No Data Available'}  readOnly disabled /></td>
                            <td key={index} className="textAlignRight"><label className="fontBold">SDF rule name:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={rule.sdfRuleName ? rule.sdfRuleName : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">SDF precedence:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={rule.precedence ? rule.precedence : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            )})
                                }
                            
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">DCCA Profile:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.dccaProfile ? item.packetSwitch.dccaProfile : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Peer-profile In-use:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.peerProfileInUse ? item.packetSwitch.peerProfileInUse : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Failover Count:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.failoverCount ? item.packetSwitch.failoverCount : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">OCS Address:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsAddress ? item.packetSwitch.ocsAddress : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">OCS Destination Realm:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsDestinationRealm ? item.packetSwitch.ocsDestinationRealm : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">OCS Destination Host:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.ocsDestinationHost ? item.packetSwitch.ocsDestinationHost : 'No Data Available'}  readOnly disabled /></td>
                            </tr>

                            {item.packetSwitch.ratingGroupDataList.map((rating, index) => {
                            return(
                            <tr key={index}>
                                <td className="textAlignRight"><label className="fontBold">Rating Group:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={rating.ratingGroup ? rating.ratingGroup : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Used Total Octets:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={rating.usedTotalOctets ? rating.usedTotalOctets : 'No Data Available'}  readOnly disabled /></td>
                                <td className="textAlignRight"><label className="fontBold">Diameter Code:</label></td>
                                <td><input type="text" className="txtBoxHeight" value={rating.diameterCode ? rating.diameterCode : 'No Data Available'}  readOnly disabled /></td>
                            </tr>
                            
                            )
                            }
                            
                            )}
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Number of PDN Contexts:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.numbercontexts ? item.packetSwitch.numbercontexts : 'No Data Available'}  readOnly disabled /></td>
                            <td></td><td></td>
                            <td></td><td></td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </React.Fragment>
                    ) 
                        } else {
                            return(false);
                        }
                }) 
            }
        </div>
    );
    }
}