import React from "react"
import CitizenAndOthers from "./CitizenandOther"
import PrivateProfessionals from "./PrivateProfessionals"
import Promoters from "./Promoters"

const ApplyOnline = () => {
    return (
        <React.Fragment>
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
        <PrivateProfessionals />
        <Promoters />
        <CitizenAndOthers />
        </div>
        </React.Fragment>
    )
}

export default ApplyOnline