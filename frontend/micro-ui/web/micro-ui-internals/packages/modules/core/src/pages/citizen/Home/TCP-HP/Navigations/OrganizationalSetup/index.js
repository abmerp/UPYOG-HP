import React from "react"
import OfficesInfo from "./OfficesInfo"
import PostwiseSetup from "./PostwiseSetup"

export default function OrganizationalSetup() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <OfficesInfo />
            <PostwiseSetup />
        </div>
    )
}