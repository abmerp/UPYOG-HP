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
    display: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px',
    backgroundColor:'#BFBFBF',
    color: 'white'
  },
  tab: {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    color: 'pink',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor:'gray',
  },
  selectedTab: {
    backgroundColor: 'gray', // Set background color for the selected tab
    color: 'white',
  },
  subtabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    backgroundColor: '#F2F2F2',
    color: 'black'
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
        className={activeTab ? classes.selectedTab : classes.tab}
        value={activeTab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{ children: <Divider className={classes.tabDivider} orientation="vertical" /> }}
      >
        <Tab label="Application Form" />
        <Tab label="Form Summary"/>
        <Tab label="Demand and Payment"/>
        <Tab label="Self-Approval"/>
        <Tab label="Site Inspection Report"/>
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
