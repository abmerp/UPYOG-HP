import React from "react";
import "../styles/certificates.css";
import barImg from "../assets/bar.png";
import logo from "../assets/logo.png";
import sign from "../assets/sign.png";
import swatchBharat from "../assets/swatchBharat.png";
import watermark from "../assets/watermark.png";

const MobileTower = () => (
  <div className="certificate-container">
    <div className="certificate">
      <div className="water-mark-overlay"></div>
      <div className="outer-border"></div>
      <div className="inner-border"></div>
      <div className="certificate-header">
        <img src={barImg} className="logo" alt="" />
        <img src={logo} className="logo" alt="" style={{ marginRight: "6rem" }} />
        <h2>Sr. No. : 0000</h2>
      </div>

      <div className="certificate-body">
        <p className="certificate-title">
          <strong>
            Department of Town and Country Planning <br /> Government of Himachal Pradesh
          </strong>
        </p>
        <h1>Mobile Tower Application</h1>
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
            M/S SUMMIT DIGITAL INFAR.PVT.LTD.C/O SH.DHARAMJEET SINGH S/O SH. HAKAM SINGH & SH. HONEY S/O SH. SUKHDEV SINGH C/o : S/o V.P.O. ANDORA
            UPPER TEH. AMB, , V.P.O. ANDORA UPPER, Amb, Una, Himachal Pradesh
          </span>
        </div>
        <div className="certificate-to">
          <h5>Subject :- Permission for Development / Construction of building.</h5>
        </div>
        <div className="name">
          You are hereby granted permission under 31 of the Himachal Pradesh Town and Country Planning Act, 1977 (Act No. 12 of 1977) on Khasra no.
          1604 Revenue Mohal Andora Upper situated at village Andora Upper to carry out the development/ sub-division of land/ construction of
          building as mentioned in your Application under reference, subject to the following conditions, namely:-
        </div>
        <div className="certificate-signature">
          <img src={sign} className="logo" alt="" />
        </div>
        <div className="certificate-to">
          <h6>Copy To:-</h6>
        </div>
        <div className="list">
          <h5>
            1. The Commissioner, Municipal Corporation/ Executive Officer, Municipal Council / Secretary, Nagar Panchayat along with a copy of the
            approved plan for information and further necessary action.
          </h5>
          <h5>
            2. The Chairman, Town and Country Development Authority along with a copy of the approved plan for information and further necessary
            action.
          </h5>
          <h5>
            3. The Registrar/ Sub-Registrar, Sub-Tehsil/ Tehsil District Himachal Pradesh alongwith a copy of the approved plan for information and
            making necessary entries in the Revenue record.
          </h5>
        </div>
        <div className="certificate-to">
          <h6> Enclosers : As above :-</h6>
        </div>
        <div className="certificate-last">
          <img src={swatchBharat} alt="" />
          <img src={sign} alt="" className="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default MobileTower;
