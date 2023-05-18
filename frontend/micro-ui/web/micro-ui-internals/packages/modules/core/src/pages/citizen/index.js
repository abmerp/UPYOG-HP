import { BackButton } from "@egovernments/digit-ui-react-components";
import React from "react";
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
// import PDF from "../../assets/";
import Strip from "./Home/TCP-HP/Strip";
import GovtStrip from "./Home/TCP-HP/GovtStrip";
import Navbar from "./Home/TCP-HP/Navbar";
import MapFooter from "./Home/TCP-HP/Footer/MapFooter";
import Objectives from "./Home/TCP-HP/Navigations/Objective";
import OrganizationalSetup from "./Home/TCP-HP/Navigations/OrganizationalSetup";
import ContactUs from "./Home/TCP-HP/Navigations/ContactUs";
import EmployeeProfile from "./Home/TCP-HP/Navigations/EmployeeProfile";
import ExEmployeeProfile from "./Home/TCP-HP/Navigations/ExEmployeeProfile";
import Appendix1 from "./Home/TCP-HP/Navigations/Appendix1";
import Appendix8 from "./Home/TCP-HP/Navigations/Appendix8";
import AppartmentRegulation from "./Home/TCP-HP/Navigations/ApartmentRegulation";
import CourtOrders from "./Home/TCP-HP/Navigations/CourtOrders";
import NotificationTCPAct from "./Home/TCP-HP/Navigations/NotificationTCPAct";
import ServiceMatter from "./Home/TCP-HP/Navigations/ServiceMatter";
import PhotoGallery from "./Home/TCP-HP/Navigations/PhotoGallery";
import VideoGallery from "./Home/TCP-HP/Navigations/VideoGallery";
import HeritageGallery from "./Home/TCP-HP/Navigations/HeritageGallery";
import PowerDelegation from "./Home/TCP-HP/Navigations/Delegation";
import DevelopmentPlan from "./Home/TCP-HP/Navigations/DevelopmentPlan";
import ApplyOnline from "./Home/TCP-HP/OurServices/ApplyOnline";
// import CardGroup from "./Home/TCP-HP/Cards/CardGroup";
import FormType from "./Home/TCP-HP/FeeCalculator";
import Form12 from "./TCPForms/forms/form12";
import Form11 from "./TCPForms/forms/form11";
import Form16 from "./TCPForms/forms/form16";
import Form26 from "./TCPForms/forms/form26";
import Form34 from "./TCPForms/forms/form34";

const getTenants = (codes, tenants) => {
  return tenants.filter((tenant) => codes.map((item) => item.code).includes(tenant.code));
};

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      {children}
      <MapFooter />
    </React.Fragment>
  );
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
      <TopBarSideBar
        t={t}
        stateInfo={stateInfo}
        userDetails={userDetails}
        CITIZEN={CITIZEN}
        cityDetails={cityDetails}
        mobileView={mobileView}
        handleUserDropdownSelection={handleUserDropdownSelection}
        logoUrl={logoUrl}
        showSidebar={true}
      />

      <div className={`main center-container mb-25`}>
        <Switch>
          <Route exact path={path}>
            <CitizenHome />
          </Route>
          <Route path={`${path}/objectives`}><Layout><Objectives /></Layout></Route>
          <Route path={`${path}/organizational-setup`}><Layout><OrganizationalSetup /></Layout></Route>
          <Route path={`${path}/contact-us`}><Layout><ContactUs /></Layout></Route>
          <Route path={`${path}/employeeprofile}`}><Layout><EmployeeProfile /></Layout></Route>
          <Route path={`${path}/ex-employee-profile`}><Layout><ExEmployeeProfile /></Layout></Route>
          <Route path={`${path}/appendix-1`}><Layout><Appendix1 /></Layout></Route>
          <Route path={`${path}/appendix-8`}><Layout><Appendix8 /></Layout></Route>
          <Route path={`${path}/apartment-colonies-regulation`}><Layout><AppartmentRegulation /></Layout></Route>
          <Route path={`${path}/court-orders`}><Layout><CourtOrders /></Layout></Route>
          <Route path={`${path}/notifications-under-tcp-act`}><Layout><NotificationTCPAct /></Layout></Route>
          <Route path={`${path}/service-matter`}><Layout><ServiceMatter /></Layout></Route>
          <Route path={`${path}/photo-gallery`}><Layout><PhotoGallery /></Layout></Route>
          <Route path={`${path}/video-gallery`}><Layout><VideoGallery /></Layout></Route>
          <Route path={`${path}/heritage-gallery`}><Layout><HeritageGallery /></Layout></Route>
          <Route path={`${path}/delegation-of-powers`}><Layout><PowerDelegation /></Layout></Route>
          <Route path={`${path}/development-plan`}><Layout><DevelopmentPlan /></Layout></Route>
          {/* <Route path={`${path}/officerlogin`}><Layout><CardGroup /></Layout></Route> */}
          <Route path={`${path}/applyOnline`}><Layout><ApplyOnline /></Layout></Route>
          <Route path={`${path}/feeCalculator`}><Layout><FormType /></Layout></Route>
          <Route path={`${path}/form12`}><Form12 /></Route>
          <Route path={`${path}/form11`}><Form11 /></Route>
          <Route path={`${path}/form16`}><Form16 /></Route>
          <Route path={`${path}/form26`}><Form26 /></Route>
          <Route path={`${path}/form34`}><Form34 /></Route> 
          <Route exact path={`${path}/select-language`}>
            <LanguageSelection />
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

          <ErrorBoundary>
            {appRoutes}
            {ModuleLevelLinkHomePages}
          </ErrorBoundary>
        </Switch>
      </div>
      <div style={{ width: '100%', bottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', color:"#22394d" }}>
          <img style={{ cursor: "pointer", display: "inline-flex", height: '1.4em' }} alt={"Powered by DIGIT"} src={`${sourceUrl}/digit-footer.png`} onError={"this.src='./../digit-footer.png'"} onClick={() => {
            window.open('https://www.digit.org/', '_blank').focus();
          }}></img>
          <span style={{ margin: "0 10px" }}>|</span>
          <span style={{ cursor: "pointer", fontSize: "16px", fontWeight: "400"}} onClick={() => { window.open('https://niua.in/', '_blank').focus();}} >Copyright © 2022 National Institute of Urban Affairs</span>
          <span style={{ margin: "0 10px" }}>|</span>
          <a style={{ cursor: "pointer", fontSize: "16px", fontWeight: "400"}} href="#" target='_blank'>UPYOG License</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
