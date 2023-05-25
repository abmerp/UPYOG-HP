import React from "react"
import AuthDetails from "./AuthDetails"
import OurServices from "./OurServices"

const AuthAndServices = () => {
    return(
        <React.Fragment>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <AuthDetails />
            <OurServices />
            </div>
        </React.Fragment>
    )
}

export default AuthAndServices