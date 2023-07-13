import React from "react";
import "../styles/certificates.css";
import barImg from "../assets/bar.png";
import logo from "../assets/logo.png";
import sign from "../assets/sign.png";
import swatchBharat from "../assets/swatchBharat.png";
import watermark from "../assets/watermark.png";
import Form11UDSign from "../assets/Form11UDSign.png";
import QrCode from "./QRCODE";

const MobileTowerUDCerificate = () => (
  <div className="certificate-container">
    <div className="certificate">
      <div className="water-mark-overlay"></div>
      <div class="outer-border"></div>
      <div class="inner-border"></div>
      <div className="certificate-header">
      <img
          src="https://obpsud.hp.gov.in/img/logoHP.png"
          style={{height:147,width:145}}
          alt=""
        />
       
        <p className="certificate-title">
          <strong>
            Department of Urban Developement <br /> Government of
            Himachal Pradesh
          </strong>
          <h1 className="border-title">Mobile Tower Application</h1>
        </p>
        <div>
        {/* <img src="data:image/png;base64,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" 
        className="logo" alt="" style={{height:"60",width:"60"}}/> */}
        <QrCode/>
         <h2 className="srNo">Sr. No. : 0000</h2>
      
        </div>
      </div>

      <div className="certificate-body" >
      
        

        <div className="certificate-date">
       
          <h2>No. : 31202100013</h2>
          <h2>Dated : 14/Dec/2021</h2>
        </div>
        <div className="certificate-to">
          <h6>To</h6>
        </div>
        <div className="name">
          Sh./Smt./M/s
          <span className="applied-name">
            M/S SUMMIT DIGITAL INFAR.PVT.LTD.&nbsp;&nbsp;<span style={{fontWeight:400}}>C/O :</span>SH.DHARAMJEET SINGH S/O SH.
            HAKAM SINGH & SH. HONEY S/O SH. SUKHDEV SINGH&nbsp;&nbsp;<span style={{fontWeight:400}}> C/o :</span> S/o V.P.O.
            ANDORA UPPER TEH. AMB, , V.P.O. ANDORA UPPER, Amb, Una, Himachal
            Pradesh
          </span>
        </div>
    
        <div style={{fontSize:15,float:"left",fontWeight:"700",marginLeft:10}}>
            Subject :-
            <span style={{marginLeft:10,fontSize:15,fontWeight:"400"}}>
            Permission for Development / Construction of building.
            </span>
          </div>
       
        <div className="body">
          <p>
          You are hereby granted permission under 31 of the Himachal Pradesh
          Town and Country Planning Act, 1977 (Act No. 12 of 1977) on Khasra no.
          <span style={{fontWeight:500}}>1604</span> Revenue Mohal <span style={{fontWeight:500}}>Andora</span> Upper situated at village Andora Upper to
          carry out the development/ sub-division of land/ construction of
          building as mentioned in your Application under reference, subject to
          the following conditions, namely:-
          </p>
        </div>
        {/* <div className="certificate-signature">
          <img src={Form11UDSign} className="logo" alt="" />
        </div> */}
        <div className="certificate-to">
          <h6>Copy To:-</h6>
        </div>
        <div className="list">
          <h5>
            1. 
          </h5>
          <h5>
            2. 
          </h5>
          <h5>
            3. 
          </h5>
        </div>
        <div className="certificate-to">
          <h6> Enclosers : As above :-</h6>
        </div>
        <div className="certificate-last">
          <img src={swatchBharat} alt="" />
          <img src={Form11UDSign} alt="" className="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default MobileTowerUDCerificate;
