import {
    Calender, CardBasedOptions, CaseIcon, ComplaintIcon, DocumentIcon, HomeIcon, Loader, OBPSIcon, PTIcon, StandaloneSearchBar, WhatsNewCard
} from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import Strip from "./TCP-HP/Strip";
import GovtStrip from "./TCP-HP/GovtStrip";
import ImageSlider from "./TCP-HP/ImageSlider";
import images from "./TCP-HP/images";
import NewsTicker from "./TCP-HP/NewsTicker";
import Card from "./TCP-HP/Cards/Card";
import AuthAndServices from "./TCP-HP/AuthAndServices";
import Facilation from "./TCP-HP/Facilation";
import FormAndCheckList from "./TCP-HP/FormAndCheckList";
import LinksSlideshow from "./TCP-HP/LinksSlideShow";
import MapFooter from "./TCP-HP/Footer/MapFooter";
import Navbar from "./TCP-HP/Navbar";
import Objectives from "./TCP-HP/Navigations/Objective";
import OrganizationalSetup from "./TCP-HP/Navigations/OrganizationalSetup";
import ContactUs from "./TCP-HP/Navigations/ContactUs";
import ExEmployeeProfile from "./TCP-HP/Navigations/ExEmployeeProfile";
import EmployeeProfile from "./TCP-HP/Navigations/EmployeeProfile";
import Appendix1 from "./TCP-HP/Navigations/Appendix1";
import Appendix8 from "./TCP-HP/Navigations/Appendix8";
import AppartmentRegulation from "./TCP-HP/Navigations/ApartmentRegulation";
import CourtOrders from "./TCP-HP/Navigations/CourtOrders";
import NotificationTCPAct from "./TCP-HP/Navigations/NotificationTCPAct";
import ServiceMatter from "./TCP-HP/Navigations/ServiceMatter";
import PhotoGallery from "./TCP-HP/Navigations/PhotoGallery";
import VideoGallery from "./TCP-HP/Navigations/VideoGallery";
import HeritageGallery from "./TCP-HP/Navigations/HeritageGallery";
import PowerDelegation from "./TCP-HP/Navigations/Delegation";
import DevelopmentPlan from "./TCP-HP/Navigations/DevelopmentPlan";
import Footers from "./TCP-HP/Footers";


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Strip />
      <GovtStrip />
      <Navbar />
      {children}
      <Footers />
    </React.Fragment>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { path } = useRouteMatch();
  const tenantId = Digit.ULBService.getCitizenCurrentTenant(true);
  const { data: { stateInfo } = {}, isLoading } = Digit.Hooks.useStore.getInitData();

  const conditionsToDisableNotificationCountTrigger = () => {
    if (Digit.UserService?.getUser()?.info?.type === "EMPLOYEE") return false;
    if (!Digit.UserService?.getUser()?.access_token) return false;
    return true;
  };

  const { data: EventsData, isLoading: EventsDataLoading } = Digit.Hooks.useEvents({
    tenantId,
    variant: "whats-new",
    config: {
      enabled: conditionsToDisableNotificationCountTrigger(),
    },
  });

  if (!tenantId) {
    history.push(`/digit-ui/citizen/select-language`);
  }

  const allCitizenServicesProps = {
    header: t("DASHBOARD_CITIZEN_SERVICES_LABEL"),
    sideOption: {
      name: t("DASHBOARD_VIEW_ALL_LABEL"),
      onClick: () => history.push("/digit-ui/citizen/all-services"),
    },
    options: [
      {
        name: t("ES_PGR_HEADER_COMPLAINT"),
        Icon: <ComplaintIcon />,
        onClick: () => history.push("/digit-ui/citizen/pgr-home"),
      },
      {
        name: t("MODULE_PT"),
        Icon: <PTIcon className="fill-path-primary-main" />,
        onClick: () => history.push("/digit-ui/citizen/pt-home"),
      },
      {
        name: t("MODULE_TL"),
        Icon: <CaseIcon className="fill-path-primary-main" />,
        onClick: () => history.push("/digit-ui/citizen/tl-home"),
      },
      // {
      //     name: t("ACTION_TEST_WATER_AND_SEWERAGE"),
      //     Icon: <DropIcon/>,
      //     onClick: () => history.push("/digit-ui/citizen")
      // },
      {
        name: t("CS_COMMON_INBOX_BPA"),
        Icon: <OBPSIcon />,
        onClick: () => history.push("/digit-ui/citizen/obps-home"),
      },
    ],
    styles: { display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: "100%" },
  };
  const allInfoAndUpdatesProps = {
    header: t("CS_COMMON_DASHBOARD_INFO_UPDATES"),
    sideOption: {
      name: t("DASHBOARD_VIEW_ALL_LABEL"),
      onClick: () => {},
    },
    options: [
      {
        name: t("CS_HEADER_MYCITY"),
        Icon: <HomeIcon />,
      },
      {
        name: t("EVENTS_EVENTS_HEADER"),
        Icon: <Calender />,
        onClick: () => history.push("/digit-ui/citizen/engagement/events"),
      },
      {
        name: t("CS_COMMON_DOCUMENTS"),
        Icon: <DocumentIcon />,
        onClick: () => history.push("/digit-ui/citizen/engagement/docs"),
      },
      {
        name: t("CS_COMMON_SURVEYS"),
        Icon: <DocumentIcon />,
        onClick: () => history.push("/digit-ui/citizen/engagement/surveys/list"),
      },
      // {
      //     name: t("CS_COMMON_HELP"),
      //     Icon: <HelpIcon/>
      // }
    ],
    styles: { display: "flex", flexWrap: "wrap", justifyContent: "flex-start", width: "100%" },
  };

  return isLoading ? (
    <Loader />
  ) : (
    // <div className="HomePageWrapper">
    //   <div className="BannerWithSearch">
    //     <img src={stateInfo?.bannerUrl} />
    //     <div className="Search">
    //       <StandaloneSearchBar placeholder={t("CS_COMMON_SEARCH_PLACEHOLDER")} />
    //     </div>
    //   </div>

    //   <div className="ServicesSection">
    //     <CardBasedOptions {...allCitizenServicesProps} />
    //     <CardBasedOptions {...allInfoAndUpdatesProps} />
    //   </div>

    //   {conditionsToDisableNotificationCountTrigger() ? (
    //     EventsDataLoading ? (
    //       <Loader />
    //     ) : (
    //       <div className="WhatsNewSection">
    //         <div className="headSection">
    //           <h2>{t("DASHBOARD_WHATS_NEW_LABEL")}</h2>
    //           <p onClick={() => history.push("/digit-ui/citizen/engagement/whats-new")}>{t("DASHBOARD_VIEW_ALL_LABEL")}</p>
    //         </div>
    //         <WhatsNewCard {...EventsData?.[0]} />
    //       </div>
    //     )
    //   ) : null}
    // </div>
    <Switch>
      <Route path={`${path}/objectives`}><Layout><Objectives /></Layout></Route>
      <Route path={`${path}/organizational-setup`}><Layout><OrganizationalSetup /></Layout></Route>
      <Route path='/contact-us'><Layout><ContactUs /></Layout></Route>
      <Route path='/employee-profile'><Layout><EmployeeProfile /></Layout></Route>
      <Route path='/ex-employee-profile'><Layout><ExEmployeeProfile /></Layout></Route>
      <Route path='/appendix-1'><Layout><Appendix1 /></Layout></Route>
      <Route path='/appendix-8'><Layout><Appendix8 /></Layout></Route>
      <Route path='/apartment-colonies-regulation'><Layout><AppartmentRegulation /></Layout></Route>
      <Route path='/court-orders'><Layout><CourtOrders /></Layout></Route>
      <Route path='/notifications-under-tcp-act'><Layout><NotificationTCPAct /></Layout></Route>
      <Route path='/service-matter'><Layout><ServiceMatter /></Layout></Route>
      <Route path='/photo-gallery'><Layout><PhotoGallery /></Layout></Route>
      <Route path='/video-gallery'><Layout><VideoGallery /></Layout></Route>
      <Route path='/heritage-gallery'><Layout><HeritageGallery /></Layout></Route>
      <Route path='/delegation-of-powers'><Layout><PowerDelegation /></Layout></Route>
      <Route path='/development-plan'><Layout><DevelopmentPlan /></Layout></Route>
      {/* <Route path='/applyOnline' element={<Layout><ApplyOnline /></Layout>} />
      <Route path='/officerlogin' element={<Layout><CardGroup /></Layout>} />
      <Route path='/feeCalculator' element={<Layout><FormType /></Layout>} /> */}
      <Route path='/*'><Layout>
        <ImageSlider images={images}/>
        <NewsTicker />
        <Card />
        <AuthAndServices />
        <Facilation />
        <FormAndCheckList />
        <LinksSlideshow />
        <MapFooter />
      </Layout>
      </Route>
    </Switch>
  );
};

export default Home;
