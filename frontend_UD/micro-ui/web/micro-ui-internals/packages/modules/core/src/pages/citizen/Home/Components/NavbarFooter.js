import React from 'react';
import { Card } from 'react-bootstrap';

export function NavbarFooter(){
    return(
        <div>
        <footer style={{backgroundColor:"#274472",height:"65px",position:'fixed',width:"1300px",bottom:"0",left:"0"}}>
            <div style={{float:"left",marginRight:"50px"}}>
          <ul style={{padding:"0px 0px 0px 10px"}}>
            <li style={{color:"white",display:"inline",margin:"0px 10px 0px 10px"}}>
                <a href='http://localhost:3000/' title='home' style={{color:"white",listStyle:"none",fontSize:"15px"}}>Home</a>
            </li>
            <span style={{color:"white"}}>|</span>
          <li style={{color:"white",display:"inline",margin:"0px 10px 0px 10px"}}>
                <a href='http://localhost:3000/faq' title='home' style={{color:"white",listStyle:"none",fontSize:"15px"}}>FAQ </a>
            </li>
            <span style={{color:"white"}}>|</span>
          <li style={{color:"white",display:"inline",margin:"0px 10px 0px 10px"}}>
                <a href='http://localhost:3000/contactus' title='home' style={{color:"white",listStyle:"none",fontSize:"15px"}}>Contact Us </a>
            </li>
            <li style={{color:"white",marginLeft:"10px",marginTop:"5px",listStyle:"none",fontSize:"13px"}}>
            2017 © Urban Development Department. All Rights Reserved.
            </li>
          </ul>
          </div>
       <div style={{float:"right",width:"50%",color:"white",margin:"20px 70px 0px 0px", textAlign:"right"}}>
            <div>
              <span>Total Visitors :-<strong>223367</strong> </span>
            </div>
            <div style={{float:"right",color:"white",margin:"0px 0px 10px 0px", textAlign:"right",fontSize:"14px"}}>
              Powered By <span style={{color:"skyblue"}}>ABM Knowedgeware Limited</span>
            </div>
       </div>

       </footer>
          
          {/* <div style={{display:"block",width:"1664px",marginLeft:-"12px",height:"100px",marginRight:"-12px",backgroundColor:"blue"}}>
           <div style={{width:"50%",float:"left"}}>
           <ul style={{padding:"10px 0px 0px 10px"}}>
            <li style={{color:"white",display:"inline",marginLeft:"10px"}}>
                <a href='http://localhost:3000/' title='home' style={{color:"white"}}>Home |</a>
            </li>
          <li style={{color:"white",display:"inline",marginRight:"10px"}}>
                <a href='http://localhost:3000/faq' title='home' style={{color:"white"}}>Faq |</a>
            </li>
          <li style={{color:"white",display:"inline",marginLeft:"15px"}}>
                <a href='http://localhost:3000/contactus' title='home' style={{color:"white"}}>Contact Us </a>
            </li>
          </ul>
          <ul style={{color:"white",fontSize:"15px",listStyle:"none",padding:"0px 0px 12px 16px"}}>
            <li>
            2017 © Urban Development Department. All Rights Reserved.
            </li>
            </ul>
           </div>
           <div style={{width:"50%",float:"right"}}>
            <div style={{marginTop:"15px"}}>
              Total Visitors:-
            </div>
           </div>
          </div> */}
        </div>
    )
}