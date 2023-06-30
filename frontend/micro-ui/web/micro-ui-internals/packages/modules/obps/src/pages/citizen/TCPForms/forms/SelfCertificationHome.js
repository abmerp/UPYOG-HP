import React, { useState } from "react";
import Step1 from "../formComponents/selfCertification/Step1";
import Step2 from "../formComponents/selfCertification/Step2";
import Step3 from "../formComponents/selfCertification/Step3";
import Step4 from "../formComponents/selfCertification/Step4";
import SiteInspectionReport from "../SelfApprovalPortal/SiteInspectionReport";
import SelfApproval from "../SelfApprovalPortal/SelfApproval";
import { Tabs, Tab, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Summary from "../formComponents/selfCertification/Summary";
import PaymentConfirm from "../screens/PaymentConfirm";

const useStyles = makeStyles({
  tabsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor:'#F5F5FF',
    color: 'white',
  },
  tab: {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  },
  selectedTab: {
    // backgroundColor: 'gray', // Set background color for the selected tab
    color: 'white',
  },
  subtabsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px',
    backgroundColor: '#F2F2F2',
    color: '#1F4A7C',
    fontSize: '12px',
  },
  // subtab: {
  //   padding: '10px 20px',
  //   margin: '5px',
  //   cursor: 'pointer',
  //   backgroundColor: 'lightgray',
  //   borderRadius: '5px',
  //   border: 'none',
  //   outline: 'none',
  // },
  // tabDivider: {
  //   backgroundColor: 'gray',
  //   width: '1px',
  //   height: '100%',
  // }
});


const SelfCertificationHome = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [subActiveTab, setSubActiveTab] = useState(0);
    const classes = useStyles();

    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
    };
  
    const handleSubTabChange = (event, newValue) => {
      setSubActiveTab(newValue)
    };

    

  return (
    <React.Fragment>
     <div className={classes.tabsContainer}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        indicatorColor="seconday"
        textColor="white"
        TabIndicatorProps={{ children: <Divider className={classes.tabDivider} orientation="vertical" /> }}
      >
        {activeTab === 0 ? <Tab label="Application Form" style={{backgroundColor: '#1F4A7C', color: 'white', borderRadius: '6px', marginLeft: '60px'}}/> : <Tab label="Application Form" style={{color: 'black', marginLeft: '400px'}}/>}
        {activeTab === 1 ?  <Tab label="Form Summary" style={{backgroundColor: '#1F4A7C', color: 'white', borderRadius: '6px'}}/> : <Tab label="Form Summary" style={{color: 'black'}}/> }
        {activeTab === 2 ? <Tab label="Demand and Payment" style={{backgroundColor: '#1F4A7C', color: 'white', borderRadius: '6px'}}/> :  <Tab label="Demand and Payment" style={{color: 'black'}}/>}
        {activeTab === 3 ? <Tab label="Self-Approval" style={{backgroundColor: '#1F4A7C', color: 'white', borderRadius: '6px'}}/> : <Tab label="Self-Approval" style={{color: 'black'}}/> }
        {activeTab === 4 ? <Tab label="Site Inspection Report"style={{backgroundColor: '#1F4A7C', color: 'white', borderRadius: '6px'}}/> :  <Tab label="Site Inspection Report" style={{color: 'black'}}/>}
      </Tabs>
      </div>
      {activeTab === 0 && (
         <div className={classes.subtabsContainer}>
        <Tabs
          value={subActiveTab}
          onChange={handleSubTabChange}
          indicatorColor="secondary"
          textColor="white"
        >
          <Tab label="Applicant Information" style={{fontSize: '14px', marginLeft: '100px'}} />
          <Tab label="Private Professional Information" style={{fontSize: '14px'}}/>
          <Tab label="CheckList" style={{fontSize: '14px'}}/>
          <Tab label="Documents" style={{fontSize: '14px'}}/>
        </Tabs>
        </div>
      )}

      {activeTab === 1 && <div><Summary /></div>}
      {activeTab === 2 && <div><PaymentConfirm /></div>}
      {activeTab === 3 && <div><SelfApproval /></div>}
      {activeTab === 4 && <div><SiteInspectionReport /></div>}
      {activeTab === 0 && subActiveTab === 0 && <div><Step1 /></div>}
      {activeTab === 0 && subActiveTab === 1 && <div><Step2 /></div>}
      {activeTab === 0 && subActiveTab === 2 && <div><Step3 /></div>}
      {activeTab === 0 && subActiveTab === 3 && <div><Step4 /></div>}
    </React.Fragment>
  );
};

export default SelfCertificationHome;
