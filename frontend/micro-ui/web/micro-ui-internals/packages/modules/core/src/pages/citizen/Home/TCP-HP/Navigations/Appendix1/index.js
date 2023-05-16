import React from "react"
import GeneralRegulation from "./GeneralRegulation"
import IndustrialUse from "./IndustrialUse"
import OtherUse from "./OtherUse"

const Appendix1 = () => {
    return(
        <>
        <p style={{textAlign: 'center'}}><span style={{fontSize:'16px'}}>APPENDIX-1<br />
            (See rules 13 and 14)</span>
        </p>
        <div style={{margin: '20px'}}>
        <p><strong>REGULATIONS FOR SUB-DIVISION OF LAND OR CHANGE OF LAND USE OR DEVELOPMENT OF LAND OR CONSTRUCTION OF BUILDING IN AREAS WHERE LAND USE IS FROZEN AND INTERIM DEVELOPMENT PLAN OR DEVELOPMENT PLAN HAS NOT BEEN PREPARED.</strong></p>
        <p><strong>I. &nbsp;&nbsp;&nbsp;&nbsp;Application for permission:-</strong></p>
        <p>&nbsp; After the boundaries of the land in question are marked, the applicant shall make an application in Forms 11 or 12, as the case may be addressed to the Director and such application shall be accompanied by such documents as specified in Forms 11 or 12.</p>
        <p><strong>II. The minimum Plot Area, minimum Set Backs and maximum Floor Area Ratio (FAR) shall be as under:-</strong></p>
        </div>
        <OtherUse />
        <IndustrialUse />
        <GeneralRegulation />
        </>
    )
}

export default Appendix1