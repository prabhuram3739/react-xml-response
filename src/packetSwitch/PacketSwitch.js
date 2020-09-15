import React  from 'react';

export default class PacketSwitch extends React.Component {
    render() {
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No Packet Switch Information available</span>
        )
       }
       return (

        <div className="container-fluid noPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <>
                        {/*<div key={item.id}>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">APN Requested:</label><span>{item.packetSwitch.apnRequested}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Virtual APN:</label><span>{item.packetSwitch.virtualApn}</span></div>
                        <div className="col-3">
                        <label className="fontBold">PDN Type:</label><span>{item.packetSwitch.pdnType}</span></div>
                        <div className="col-3">
                        <label className="fontBold">UL APN AMBR:</label><span>{item.packetSwitch.ulApnAmbr}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">DL APN AMBR:</label><span>{item.packetSwitch.dlApnAmbr}</span></div>
                        <div className="col-3">
                        <label className="fontBold">UE IPV4 Address:</label><span>{item.packetSwitch.ueIpv4Address}</span></div>
                        <div className="col-3">
                        <label className="fontBold">S8 DL Bytes:</label><span>{item.packetSwitch.s8DlBytes}</span></div>
                        <div className="col-3">
                        <label className="fontBold">SGI UL Bytes:</label><span>{item.packetSwitch.sgiUlBytes}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Total Data Volume Used (MB):</label><span>{item.packetSwitch.totalDataVolumeUsed}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Primary DNS IPV4 Address:</label><span>{item.packetSwitch.primaryDnsIpv4Address}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Secondary DNS IPv4 address:</label><span>{item.packetSwitch.secondaryDnsIpv4Address}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Primary DNS IPv6 address:</label><span>{item.packetSwitch.primaryDnsIpv6Address}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Secondary DNS IPv6 address:</label><span>{item.packetSwitch.secondaryDnsIpv6Address}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">S8 PGW Data addr:</label><span>{item.packetSwitch.s8PgwDataAddr}</span></div>
                        <div className="col-3">
                        <label className="fontBold">S8 SGW V4 Ctl Adr:</label><span>{item.packetSwitch.s8SgwV4CtlAdr}</span></div>
                        <div className="col-3">
                        <label className="fontBold">S8 SGW Data Addr:</label><span>{item.packetSwitch.s8SgwDataAddr}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Gx peer profile in use:</label><span>{item.packetSwitch.gxPeerProfileInUse}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Gx failover count:</label><span>{item.packetSwitch.gxFailoverCount}</span></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF hostname:</label><span>{item.packetSwitch.pcrfHostname}</span></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF address:</label><span>{item.packetSwitch.pcrfAddress}</span></div>
                        <div className="col-3">
                        <label className="fontBold">PCRF destination host:</label><span>{item.packetSwitch.pcrfDestinationHost}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">Rule Base Name:</label><span>{item.packetSwitch.ruleBaseName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">SDF rule name:</label><span>{item.packetSwitch.sdfRuleName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">SDF precedence:</label><span>{item.packetSwitch.sdfPrecedence}</span></div>
                        <div className="col-3">
                        <label className="fontBold">SDF rule name:</label><span>{item.packetSwitch.sdfRuleName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">SDF precedence:</label><span>{item.packetSwitch.sdfPrecedence}</span></div>
                        <div className="col-3">
                        <label className="fontBold">DCCA Profile:</label><span>{item.packetSwitch.dccaProfile}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer-profile In-use:</label><span>{item.packetSwitch.peerProfileInUse}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Failover Count:</label><span>{item.packetSwitch.failoverCount}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">OCS Address:</label><span>{item.packetSwitch.ocsAddress}</span></div>
                        <div className="col-3">
                        <label className="fontBold">OCS Destination Realm:</label><span>{item.packetSwitch.ocsDestinationRealm}</span></div>
                        <div className="col-3">
                        <label className="fontBold">OCS Destination Host:</label><span>{item.packetSwitch.ocsDestinationHost}</span></div>

                        
                        {item.packetSwitch.ratingGroupDataList.map((rating, index) => {
                        return(
                            <>
                        <div key={index} className="col-3">
                            <label className="fontBold">Rating Group:</label><span>{rating.ratingGroup}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Used Total Octets:</label><span>{rating.usedTotalOctets}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Diameter Code:</label><span>{rating.diameterCode}</span></div>
                        </>
                        )
                        })}
                        </div>
                        </div> */}


                        <div className="table-responsive">
                        <table className="table table-striped table-border" key={index}>
                            <tbody>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">APN Requested:</label></td>
                                <td><span>{item.packetSwitch.apnRequested}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Virtual APN:</label></td>
                                <td><span>{item.packetSwitch.virtualApn}</span></td>
                                <td className="textAlignRight"><label className="fontBold">PDN Type:</label></td>
                                <td><span>{item.packetSwitch.pdnType}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">UL APN AMBR:</label></td>
                                <td><span>{item.packetSwitch.ulApnAmbr}</span></td>
                                <td className="textAlignRight"><label className="fontBold">DL APN AMBR:</label></td>
                                <td><span>{item.packetSwitch.dlApnAmbr}</span></td>
                                <td className="textAlignRight"><label className="fontBold">UE IPV4 Address:</label></td>
                                <td><span>{item.packetSwitch.ueIpv4Address}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">S8 DL Bytes:</label></td>
                                <td><span>{item.packetSwitch.s8DlBytes}</span></td>
                                <td className="textAlignRight"><label className="fontBold">SGI UL Bytes:</label></td>
                                <td><span>{item.packetSwitch.sgiUlBytes}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Total Data Volume Used (MB):</label></td>
                                <td><span>{item.packetSwitch.totalDataVolumeUsed}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Primary DNS IPV4 Address:</label></td>
                                <td><span>{item.packetSwitch.primaryDnsIpv4Address}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Secondary DNS IPv4 address:</label></td>
                                <td><span>{item.packetSwitch.secondaryDnsIpv4Address}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Primary DNS IPv6 address:</label></td>
                                <td><span>{item.packetSwitch.primaryDnsIpv6Address}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Secondary DNS IPv6 address:</label></td>
                                <td><span>{item.packetSwitch.secondaryDnsIpv6Address}</span></td>
                                <td className="textAlignRight"><label className="fontBold">S8 PGW Data addr:</label></td>
                                <td><span>{item.packetSwitch.s8PgwDataAddr}</span></td>
                                <td className="textAlignRight"><label className="fontBold">S8 SGW V4 Ctl Adr:</label></td>
                                <td><span>{item.packetSwitch.s8SgwV4CtlAdr}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">S8 SGW Data Addr:</label></td>
                                <td><span>{item.packetSwitch.s8SgwDataAddr}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Gx peer profile in use:</label></td>
                                <td><span>{item.packetSwitch.gxPeerProfileInUse}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Gx failover count:</label></td>
                                <td><span>{item.packetSwitch.gxFailoverCount}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">PCRF hostname:</label></td>
                                <td><span>{item.packetSwitch.pcrfHostname}</span></td>
                                <td className="textAlignRight"><label className="fontBold">PCRF address:</label></td>
                                <td><span>{item.packetSwitch.pcrfAddress}</span></td>
                                <td className="textAlignRight"><label className="fontBold">PCRF destination host:</label></td>
                                <td><span>{item.packetSwitch.pcrfDestinationHost}</span></td>
                            </tr>
                            
                                {item.packetSwitch.ruleData.sDFRulesList.map((rule, index) => {
                            return(
                            <>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">Rule Base Name:</label></td>
                                <td><span>{item.packetSwitch.ruleData.ruleBaseName}</span></td>
                            <td key={index} className="textAlignRight"><label className="fontBold">SDF rule name:</label></td>
                            <td><span>{rule.sdfRuleName}</span></td>
                            <td className="textAlignRight"><label className="fontBold">SDF precedence:</label></td>
                            <td><span>{rule.precedence}</span></td>
                            </tr>
                            </>
                            )})
                                }
                            
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">DCCA Profile:</label></td>
                                <td><span>{item.packetSwitch.dccaProfile}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Peer-profile In-use:</label></td>
                                <td><span>{item.packetSwitch.peerProfileInUse}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Failover Count:</label></td>
                                <td><span>{item.packetSwitch.failoverCount}</span></td>
                            </tr>
                            <tr>
                                <td className="textAlignRight"><label className="fontBold">OCS Address:</label></td>
                                <td><span>{item.packetSwitch.ocsAddress}</span></td>
                                <td className="textAlignRight"><label className="fontBold">OCS Destination Realm:</label></td>
                                <td><span>{item.packetSwitch.ocsDestinationRealm}</span></td>
                                <td className="textAlignRight"><label className="fontBold">OCS Destination Host:</label></td>
                                <td><span>{item.packetSwitch.ocsDestinationHost}</span></td>
                            </tr>

                            {item.packetSwitch.ratingGroupDataList.map((rating, index) => {
                            return(
                            <>
                            <tr key={index}>
                                <td className="textAlignRight"><label className="fontBold">Rating Group:</label></td>
                                <td><span>{rating.ratingGroup}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Used Total Octets:</label></td>
                                <td><span>{rating.usedTotalOctets}</span></td>
                                <td className="textAlignRight"><label className="fontBold">Diameter Code:</label></td>
                                <td><span>{rating.diameterCode}</span></td>
                            </tr>
                            
                            </>
                            )
                            })}
                        </tbody>
                        </table>
                        </div>
                        </>
                    ) 
                        }
                }) 
            }
        </div>
    );
    }
}