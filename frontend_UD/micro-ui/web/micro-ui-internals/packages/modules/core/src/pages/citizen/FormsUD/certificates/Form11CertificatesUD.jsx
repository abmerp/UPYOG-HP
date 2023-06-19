import React from "react";
import "../styles/certificates.css";
import barImg from "../assets/bar.png";
import logo from "../assets/logo.png";
import sign from "../assets/sign.png";
import swatchBharat from "../assets/swatchBharat.png";
import watermark from "../assets/watermark.png";
import Form11UDSign from "../assets/Form11UDSign.png";
import QrCode from "./QRCODE";

const Form11CertificatesUD = () => (
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
                  Municipal Council Sundernagar
          </strong>
          <h1 className="border-title">Permission for development/ Subdivision Of Land</h1>
        </p>
        <div>
        {/* <img src="data:image/png;base64,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" 
        className="logo" alt="" style={{height:"60",width:"60"}}/> */}
        <QrCode/>
         <h2 className="srNo">Sr. No. : 08 </h2>
        </div>
      </div>

      <div className="certificate-body" >
      <div className="certificate-date">
       <h2>No. :  8</h2>
       <h2>Dated : 21/Dec/2017</h2>
        </div>
        <div className="certificate-to">
          <h6>To</h6>
        </div>
        <div className="name">
          Sh./Smt./M/s
          <span className="applied-name">
          Mr. Rajesh Kumar&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:400}}>C/o:</span> S/o Narayan Dass<br/>
          Dehri,Near Mahamaya Templ , Baned, Sundernagar, Mandi, Himachal Pradesh
          </span>
        </div>
        {/* <div className="name">
          Sh./Smt./M/s
          <span className="applied-name">
          Mr. Rajesh Kumar  C/o: S/o Narayan Dass<br/>
          Dehri,near Mahamaya Templ , Baned, Sundernagar, Mandi, Himachal Pradesh
          </span>
        </div> */}
       
        <div style={{fontSize:15,float:"left",fontWeight:"700",marginLeft:10}}>
          Subject :-
        <span style={{marginLeft:10,fontSize:15,fontWeight:"400"}}>Application of permission Development/ Subdivision of land</span>
          </div>
          <br/>
          <br/>
          <div style={{fontSize:15,float:"left",fontWeight:"700",marginLeft:10}}>
          Reference :- 
          <span style={{marginLeft:10,fontSize:15,fontWeight:"400"}}>
         Your application No. <span style={{fontWeight:700}}>01201700008</span>,&nbsp;&nbsp;&nbsp;&nbsp;Dated. <span style={{fontWeight:700}}>21/Dec/2017</span>
          </span>
        </div>
       
        <div className="body1">
         <p>
        You are hereby granted permission under Sub-section <span style={{fontWeight:500}}>16C </span> of HPTCP Act 1977 of the Himachal Pradesh Town and
Country Planning Act, 1977 (Act No. 12 of 1977) for subdivision of land on Khasra no. <span style={{fontWeight:500}}>5566/2184</span> Mohal <span style={{fontWeight:"500"}}>Sundernagar</span>
&nbsp;situated at Ward <span style={{fontWeight:500}}>2-Baned</span>, District <span style={{fontWeight:500}}>Mandi </span>Himachal Pradesh subject to the following conditions:-
</p>

<p>
1. The subdivision of plots shall be done strictly in accordance with the enclosed plan. Before selling the plots, the subdivision approved shall be incorporated in revenue record.
</p>
<p>
2. The area of plot shall not be changed in any manner without the approval of competent authority.
</p>
<p>
3. The present owner of land shall provide attested copy of approved plan along with approval letter to every purchaser
at the time of registration of sale deed.
</p>
<p>
4. The purchaser shall have to obtain prior approval before carrying out any development on individual plot from the
competent authority as per rules and byelaws prevailing at the time of seeking such permission.
</p>
<p>
5. This department shall not be responsible for any kind of dispute as such permission is granted on the basis of
revenue documents and affidavit submitted with the case. In case of any dispute regarding ownership and
possession of land/plot boundary applicant shall be sole responsible to resolve the same at his own level.
</p>
<p>
6. The fees deposited is subject to verification of audit. Any additional amount pointed out by the audit later on shall
have to be deposited by the applicant.
</p>
<p>
7. No tree should be cut without the prior permission from the competent authority.
</p>
<p>
8. Minimum permissible distance of construction from the circumference of a tree/boundary of forest shall be 2.0m. &
5.0m respectively.
</p>
<p>
9. Maximum hill cut of 3.50m. height shall be permissible.
</p>
<p>
10. The safety norms of H.P.S.E.B. may be followed where HT/LT lines are crossing over the plot.
</p>
<p>
11. The area left as Green/parks & open spaces, common facilities, common areas,path and roads etc. shall not be sold
in future in any case.
</p>
<p>
12. Vide Notification No. Rev.1-3(stamp)6/79-1V dated 22-3-16 The Stamp duty chargeable under the Indian Stamp Act,
1899 ( Act No. 11 OF 1899), in respect of an instrument of gift deed executed by an individual in favour of Urban
Local Bodies and Panchayats in public interest ,falling within the limits of Town and Country Planning areas stands
remitted.
</p>
<p>
13. Vide notification No. Rev.1-3(stamp)6/79-1V dated 22-3-16 only fee of (Rs. 10/-(Rupees Ten only) shall be charged
on an instrument of gift deed executed by an individual in favour of Urban Local Bodies and Panchayats in public
interest ,falling within the limits of Town and Country Planning areas.
</p>  </div>

        {/* <div className="certificate-to">
          <h6> Enclosers : As above :-</h6>
        </div>
        <div className="certificate-signature">
          <img src={Form11UDSign} className="logo" alt="" />
        </div> */}
       
        <div className="certificate-to">
          <h6> Enclosers : As above :-</h6>
        </div>
        <div className="certificate-to">
          <h6>Copy To :-</h6>
        </div>
        <div className="list">
          <h5>
          1. <br/>
          2.
          </h5>
        </div>
        <div className="certificate-last">
          <img src={swatchBharat} alt="" />
          <img src={Form11UDSign} alt="" className="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Form11CertificatesUD;