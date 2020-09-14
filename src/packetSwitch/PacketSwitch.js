import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class PacketSwitch extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("http://localhost:8080/api/diagnosticData/724023900000009", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    });
    }

    render() {
       const { data, count, loading } = this.state || {};
       const finalData = [];
       finalData.push(data);
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No Packet Switch Information available</span>
        )
       }
       return (

        <div className="container-fluid leftPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item) => {
                    return (
                        <>
                        <div key={item.id}>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">APN Requested:</label> <span>{item.packetSwitch.apnRequested}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Virtual APN:</label> <span>{item.packetSwitch.virtualApn}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PDN Type:</label> <span>{item.packetSwitch.pdnType}</span></div>
                        <div className="col-3">
                        <label class="fontBold">UL APN AMBR:</label> <span>{item.packetSwitch.ulApnAmbr}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">DL APN AMBR:</label> <span>{item.packetSwitch.dlApnAmbr}</span></div>
                        <div className="col-3">
                        <label class="fontBold">UE IPV4 Address:</label> <span>{item.packetSwitch.ueIpv4Address}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 DL Bytes:</label> <span>{item.packetSwitch.s8DlBytes}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SGI UL Bytes:</label> <span>{item.packetSwitch.sgiUlBytes}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Total Data Volume Used (MB):</label> <span>{item.packetSwitch.totalDataVolumeUsed}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Primary DNS IPV4 Address:</label> <span>{item.packetSwitch.primaryDnsIpv4Address}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Secondary DNS IPv4 address:</label> <span>{item.packetSwitch.secondaryDnsIpv4Address}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Primary DNS IPv6 address:</label> <span>{item.packetSwitch.primaryDnsIpv6Address}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Secondary DNS IPv6 address:</label> <span>{item.packetSwitch.secondaryDnsIpv6Address}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">S8 PGW Data addr:</label> <span>{item.packetSwitch.s8PgwDataAddr}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 SGW V4 Ctl Adr:</label> <span>{item.packetSwitch.s8SgwV4CtlAdr}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 SGW Data Addr:</label> <span>{item.packetSwitch.s8SgwDataAddr}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Gx peer profile in use:</label> <span>{item.packetSwitch.gxPeerProfileInUse}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Gx failover count:</label> <span>{item.packetSwitch.gxFailoverCount}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF hostname:</label> <span>{item.packetSwitch.pcrfHostname}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF address:</label> <span>{item.packetSwitch.pcrfAddress}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF destination host:</label> <span>{item.packetSwitch.pcrfDestinationHost}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Rule Base Name:</label> <span>{item.packetSwitch.ruleBaseName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF rule name:</label> <span>{item.packetSwitch.sdfRuleName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF precedence:</label> <span>{item.packetSwitch.sdfPrecedence}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF rule name:</label> <span>{item.packetSwitch.sdfRuleName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">SDF precedence:</label> <span>{item.packetSwitch.sdfPrecedence}</span></div>
                        <div className="col-3">
                        <label class="fontBold">DCCA Profile:</label> <span>{item.packetSwitch.dccaProfile}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Peer-profile In-use:</label> <span>{item.packetSwitch.peerProfileInUse}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Failover Count:</label> <span>{item.packetSwitch.failoverCount}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">OCS Address:</label> <span>{item.packetSwitch.ocsAddress}</span></div>
                        <div className="col-3">
                        <label class="fontBold">OCS Destination Realm:</label> <span>{item.packetSwitch.ocsDestinationRealm}</span></div>
                        <div className="col-3">
                        <label class="fontBold">OCS Destination Host:</label> <span>{item.packetSwitch.ocsDestinationHost}</span></div>

                        
                        {item.packetSwitch.ratingGroupDataList.map((rating, index) => {
                        return(
                            <>
                        <div key={index} className="col-3">
                            <label class="fontBold">Rating Group:</label> <span>{rating.ratingGroup}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Used Total Octets:</label> <span>{rating.usedTotalOctets}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Diameter Code:</label> <span>{rating.diameterCode}</span></div>
                        </>
                        )
                        })}
                        </div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}