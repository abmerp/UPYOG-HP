import { BackButton } from "@egovernments/digit-ui-react-components";
import * as React from 'react'
import { useTranslation } from "react-i18next";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundaries";
import { AppHome } from "../../components/Home";
import TopBarSideBar from "../../components/TopBarSideBar";
import CitizenHome from "./Home";
import LanguageSelection from "./Home/LanguageSelection";
import LocationSelection from "./Home/LocationSelection";
import Login from "./Login";
import UserProfile from "./Home/UserProfile";
import  AboutUs  from "./AboutUs";
import Notifications from "./Home/Components/Notifications";
import Acts from "./Home/Components/Acts";
import Rules from "./Home/Components/Rules";
import ContactUs from "./Home/Components/ContactUs";
import Faq from "./Home/Components/Faq";
import UserGuideManual from "./Home/Components/UserGuideManual";
import OnlineUserServices from "./Home/Components/OnlineUserServices";
import FeeCalculator from "./Home/Components/FeeCalculator";
import CheckStatus from "./Home/Components/CheckStatus";
import OfficerLogin from "./Home/Components/OfficerLogin";
import Form12 from './FormsUD/forms/form12';
import ApplicationForMobileTower from "./FormsUD/forms/ApplicationForMobileTower";
import ChangeOfLandUse from "./FormsUD/forms/ChangeOfLandUse";
import Noc from "./FormsUD/forms/noc";
import Form11 from "./FormsUD/forms/form11";
import Form11Link from "../../../../obps/src/pages/citizen/ArchitectInbox/Form11Link";
import Form26 from "./FormsUD/forms/form26";
import Actions from "./Home/Components/Actions";
import PaymentReportUD from "./FormsUD/MIS/PaymentReportUD";
import Payment2 from "./FormsUD/screens/payment2";


// import PDF from "../../assets/";

const getTenants = (codes, tenants) => {
  return tenants.filter((tenant) => codes.map((item) => item.code).includes(tenant.code));
};

const Home = ({
  stateInfo,
  userDetails,
  CITIZEN,
  cityDetails,
  mobileView,
  handleUserDropdownSelection,
  logoUrl,
  DSO,
  stateCode,
  modules,
  appTenants,
  sourceUrl,
  pathname,
}) => {
  const classname = Digit.Hooks.fsm.useRouteSubscription(pathname);
  const { t } = useTranslation();
  const { path } = useRouteMatch();
  sourceUrl = "https://s3.ap-south-1.amazonaws.com/egov-qa-assets";

  const appRoutes = modules.map(({ code, tenants }, index) => {
    const Module = Digit.ComponentRegistryService.getComponent(`${code}Module`);
    return (
      <Route key={index} path={`${path}/${code.toLowerCase()}`}>
        <Module stateCode={stateCode} moduleCode={code} userType="citizen" tenants={getTenants(tenants, appTenants)} />
      </Route>
    );
  });

  const ModuleLevelLinkHomePages = modules.map(({ code, bannerImage }, index) => {
    let Links = Digit.ComponentRegistryService.getComponent(`${code}Links`) || (() => <React.Fragment />);
    return (
      <Route key={index} path={`${path}/${code.toLowerCase()}-home`}>
        <div className="moduleLinkHomePage">
          <img src={bannerImage || stateInfo?.bannerUrl} alt="noimagefound" />
          <BackButton className="moduleLinkHomePageBackButton" />
          <h1>{t("MODULE_" + code.toUpperCase())}</h1>
        </div>
        <div className="moduleLinkHomePageModuleLinks">
          <Links key={index} matchPath={`/digit-ui/citizen/${code.toLowerCase()}`} userType={"citizen"} />
        </div>
      </Route>
    );
  });

  return (
    <div className={classname}>
      {/* <TopBarSideBar
        t={t}
        stateInfo={stateInfo}
        userDetails={userDetails}
        CITIZEN={CITIZEN}
        cityDetails={cityDetails}
        mobileView={mobileView}
        handleUserDropdownSelection={handleUserDropdownSelection}
        logoUrl={logoUrl}
        showSidebar={true}
      /> */}

      <div className={`main center-container mb-25`}>
        <Switch>
          <Route exact path={path}>
            <CitizenHome />
          </Route>

 
           <Route exact path={`${path}/select-language`}>
            <LanguageSelection />
          </Route> 
          
          <Route path={`${path}/aboutus`} >
           <AboutUs/>
          </Route>

          <Route path={`${path}/notifications`} >
           <Notifications />
          </Route>

          <Route path={`${path}/acts`} >
           <Acts />
          </Route>
           
          <Route path={`${path}/rules`} >
           <Rules />
          </Route>
          <Route path={`${path}/faq`} >
           <Faq/>
          </Route>
          <Route path={`${path}/userguidemanual`} >
           <UserGuideManual/>
          </Route>

          <Route path={`${path}/contactus`} >
           <ContactUs />
          </Route>
          
          <Route path={`${path}/onlineuserservices`} >
           <OnlineUserServices/>
          </Route>

        

          <Route path={`${path}/feecalculator`} >
           <FeeCalculator />
          </Route>

          <Route path={`${path}/checkStatus`} >
           <CheckStatus/>
          </Route>

          <Route path={`${path}/officerlogin`} >
           <OfficerLogin/>
          </Route>



          <Route exact path={`${path}/select-location`}>
            <LocationSelection />
          </Route> 

          <Route path={`${path}/all-services`}>
            <AppHome userType="citizen" modules={modules} />
          </Route>

          <Route path={`${path}/login`}>
            <Login stateCode={stateCode} />
          </Route>

          <Route path={`${path}/register`}>
            <Login stateCode={stateCode} isUserRegistered={false} />
          </Route>

          <Route path={`${path}/user/profile`}>
            <UserProfile stateCode={stateCode} userType={"citizen"} cityDetails={cityDetails} />
          </Route>

          <Route path={`${path}/form12`}>
            <Form12/>
          </Route>

          <Route path={`${path}/applicationformobiletower`}>
            <ApplicationForMobileTower/>
          </Route>
           
          <Route path={`${path}/changeoflanduse`}>
            <ChangeOfLandUse/>
          </Route>
          
 <Route path={`${path}/form11`}>
            <Form11 />
          </Route> 
          <Route path={`${path}/form26`}>
            <Form26/>
          </Route> 

          <Route path={`${path}/form11link`}>
            <Form11Link/>
          </Route> 

          <Route path={`${path}/payment2`}>
            <Payment2/>
          </Route> 

          {/* <Route path={`${path}/form26`}>
            <Form12/>
          </Route> */}

          <Route path={`${path}/noc`}>
            <Noc/>
          </Route>

          <Route path={`${path}/action`}>
            <Actions/>
          </Route>


          {/* <Route exact path={path}>
            <FormsServices/>
          </Route> */}

          <ErrorBoundary>
            {appRoutes}
            {ModuleLevelLinkHomePages}
          </ErrorBoundary>
        </Switch>
      </div>
      {/* <div style={{ width: '100%', bottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', color:"#22394d" }}>
          <img style={{ cursor: "pointer", display: "inline-flex", height: '1.4em' }} alt={"Powered by DIGIT"} src={`${sourceUrl}/digit-footer.png`} onError={"this.src='./../digit-footer.png'"} onClick={() => {
            window.open('https://www.digit.org/', '_blank').focus();
          }}></img>
          <span style={{ margin: "0 10px" }}>|</span>
          <span style={{ cursor: "pointer", fontSize: "16px", fontWeight: "400"}} onClick={() => { window.open('https://niua.in/', '_blank').focus();}} >Copyright © 2022 National Institute of Urban Affairs</span>
          <span style={{ margin: "0 10px" }}>|</span>
          <a style={{ cursor: "pointer", fontSize: "16px", fontWeight: "400"}} href="#" target='_blank'>UPYOG License</a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
