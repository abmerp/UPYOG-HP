import React from "react";
import AdminstrativeOrders from "./AdminstrativeActs";
import NotificationTCP from "./NotificationTCPAct";

export default function NotificationTCPAct() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <NotificationTCP />
            <AdminstrativeOrders />
        </div>
    )
}