import {
  Calender, CardBasedOptions, CaseIcon, ComplaintIcon, DocumentIcon, HomeIcon, Loader, OBPSIcon, PTIcon, StandaloneSearchBar, WhatsNewCard
} from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
// import Strip from "./Strip";
// import GovtStrip from "./Govtstrip";
// import Slideshow from "./ImageSlider";
// import images from "./data";
// import MovingText from "./NewsTicker";
// import CardDetails from "./Card";
// import OurServices from "./OurServices";
// import DetailTable1 from "./DetailTable";
// import FormLinks from "./FormLinks";
// import CheckListAndForm from "./CheckListandForm";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import Header from "./Header";
import TopBarSideBar from "@egovernments/digit-ui-module-core/src/components/TopBarSideBar";
// import { RadioTower } from "@egovernments/digit-ui-react-components/src/atoms/svgindex";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BalanceIcon from '@mui/icons-material/Balance';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CellTowerIcon from '@mui/icons-material/CellTower';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const FormsServices = ({
  // stateInfo,
  // userDetails,
  // CITIZEN,
  // cityDetails,
  // mobileView,
  // handleUserDropdownSelection,
  logoUrl,
  // DSO,
  stateCode,
  modules,
  appTenants,
  // sourceUrl,
  pathname,
}) => {
const { t } = useTranslation();
const history = useHistory();
const tenantId = Digit.ULBService.getCitizenCurrentTenant(true);
const { data: { stateInfo } = {}, isLoading } = Digit.Hooks.useStore.getInitData();
const cityDetails = Digit.ULBService.getCurrentUlb();
const userDetails = Digit.UserService.getUser();
const { data: storeData } = Digit.Hooks.useStore.getInitData();
const DSO = Digit.UserService.hasAccess(["FSM_DSO"]);
// const { stateInfo } = storeData || {};
let CITIZEN = userDetails?.info?.type === "CITIZEN" || !window.location.pathname.split("/").includes("employee") ? true : false;
const mobileView = innerWidth <= 640;
let sourceUrl = `${window.location.origin}/citizen`;

const handleUserDropdownSelection = (option) => {
  option.func();
};

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
    {
      name: t("Form of application for permission of sub-division / development of land(Form_11)"),
      Icon: <LocationCityIcon color="#43446e"/>,
      onClick: () => history.push("/digit-ui/citizen/form11link"),
    },
    {
      name: t("Form of application for permission of Development of Land / Construction of Building.(Form_12)"),
      Icon: <BalanceIcon color="#43446e"/>,
      onClick: () => history.push("/digit-ui/citizen/form12"),
    },
    {
      name: t("Form Application for composition of offences under section 39-C read with sub-section (3) of section (Form_26)"),
      Icon: <VolunteerActivismIcon color="#43446e"/>,
      onClick: () => history.push("/digit-ui/citizen/form26"),
    },
    {
      name: t("Registered citizen user may apply for Mobile Tower Application(Application For MObile Tower)."),
      Icon: <CellTowerIcon color="#43446e"/>,
      // Icon: <RadioTower />,
      onClick: () => history.push("/digit-ui/citizen/applicationformobiletower"),
    },
    {
      name: t("Registered citizen user may apply for Change of Land Use(Change of Land use)."),
      Icon: <HomeWorkIcon color="#43446e"/>,
      onClick: () => history.push("/digit-ui/citizen/changeoflanduse"),
    }
  ],
  styles: { display: "flex", justifyContent: "flex-start", width: "100%", overflow: "auto" },
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
  <div className="HomePageWrapper">
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
    <div className="BannerWithSearch">
      <img src={stateInfo?.bannerUrl} />
      <div className="Search">
        <StandaloneSearchBar placeholder={t("CS_COMMON_SEARCH_PLACEHOLDER")} />
      </div>
    </div>

    <div className="ServicesSection">
      <CardBasedOptions {...allCitizenServicesProps} />
      {/* <CardBasedOptions {...allInfoAndUpdatesProps} /> */}
    </div>

    {/* {conditionsToDisableNotificationCountTrigger() ? (
      EventsDataLoading ? (
        <Loader />
      ) : (
        <div className="WhatsNewSection">
          <div className="headSection">
            <h2>{t("DASHBOARD_WHATS_NEW_LABEL")}</h2>
            <p onClick={() => history.push("/digit-ui/citizen/engagement/whats-new")}>{t("DASHBOARD_VIEW_ALL_LABEL")}</p>
          </div>
          <WhatsNewCard {...EventsData?.[0]} />
        </div>
      )
    ) : null} */}
  </div>
//   <div>
//     {/* <Strip/>
//     <GovtStrip/>
//     <Navbar/> */}
//     {/* <Header />
//     <Slideshow images={images}/>
//     <MovingText/>
//    <CardDetails/>
//     <OurServices/>
// <DetailTable1/>
// <FormLinks/>
// <CheckListAndForm/>
// <Footer/> */}
//   </div>
);
};

export default FormsServices;
