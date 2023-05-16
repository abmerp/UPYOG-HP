
import ApplicationDetails from './Application'
import AuthDetails from './AuthDetails'
import React from 'react'

const CardDetails = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AuthDetails />
            <ApplicationDetails/>
        </div>
    )
}

export default CardDetails