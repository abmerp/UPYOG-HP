import React, { useState } from "react";
import Step1 from "../formComponents/selfCertification/Step1";
import Step2 from "../formComponents/selfCertification/Step2";
import Step3 from "../formComponents/selfCertification/Step3";
import Step4 from "../formComponents/selfCertification/Step4";
import SiteInspectionReport from "../selfApprovalPortal/SiteInspectionReport";
import SelfApproval from "../selfApprovalPortal/selfApproval";
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Summary from "../formComponents/selfCertification/Summary";
import PaymentConfirm from "../screens/PaymentConfirm";

const useStyles = makeStyles({
  tabsContainer: {
    display: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
    backgroundColor:'#1F4A7C',
    color: 'white'
  },
  tab: {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  },
  selectedTab: {
    backgroundColor: 'white',
  },
  subtabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    backgroundColor: '#f5f5ff',
    color: 'black'
  },
  subtab: {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  },
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
      >
        <Tab label="Application Form" className={classes.tab} style={{color: 'white'}}/>
        <Tab label="Form Summary" className={classes.tab} style={{color: 'white'}}/>
        <Tab label="Demand and Payment" className={classes.tab} style={{color: 'white'}}/>
        <Tab label="Self-Approval" className={classes.tab} style={{color: 'white'}}/>
        <Tab label="Site Inspection Report" className={classes.tab} style={{color: 'white'}}/>
      </Tabs>
      </div>
      {activeTab === 0 && (
         <div className={classes.subtabsContainer}>
        <Tabs
          value={subActiveTab}
          onChange={handleSubTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Applicant Information" className={classes.subtabsContainer} />
          <Tab label="Private Professional Information" className={classes.subtabsContainer}/>
          <Tab label="CheckList" className={classes.subtabsContainer}/>
          <Tab label="Documents" className={classes.subtabsContainer}/>
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
