import {
    Calender, CardBasedOptions, CardBasedFormsOptions, CaseIcon, ComplaintIcon, DocumentIcon, HomeIcon, Loader, OBPSIcon, PTIcon, StandaloneSearchBar, WhatsNewCard
} from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useRouteMatch } from "react-router-dom";
import TopBarSideBar from "../../../../../components/TopBarSideBar";
// import CardBasedFormsOptions from "@egovernments/digit-ui-react-components/src/atoms/CardBasedFormsOptions";

const CitizenProfile = ({
  // stateInfo,
  userDetails,
  CITIZEN,
  cityDetails,
  mobileView,
  handleUserDropdownSelection,
  logoUrl,
}) => {
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
  const userInfo = Digit.UserService.getUser();
  const role = userInfo.info.roles[1].name
  
  const allCitizenServicesProps = {
    header: t(`${role}-Services`),
    sideOption: {
      name: t("DASHBOARD_VIEW_ALL_LABEL"),
      onClick: () => history.push("/digit-ui/citizen/all-services"),
    },
    options: [
      // {
      //   name: t("ES_PGR_HEADER_COMPLAINT"),
      //   Icon: <ComplaintIcon />,
      //   onClick: () => history.push("/digit-ui/citizen/pgr-home"),
      // },
      // {
      //   name: t("MODULE_PT"),
      //   Icon: <PTIcon className="fill-path-primary-main" />,
      //   onClick: () => history.push("/digit-ui/citizen/pt-home"),
      // },
      // {
      //   name: t("MODULE_TL"),
      //   Icon: <CaseIcon className="fill-path-primary-main" />,
      //   onClick: () => history.push("/digit-ui/citizen/tl-home"),
      // },
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
        name: t("Application for permission of Subdivision/Development of land - Form11"),
        Icon: 'https://live.staticflickr.com/65535/52918330942_e84025ff6b_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form11links"),
      },
      {
        name: t("Application for building plan Permission - Form12"),
        Icon: 'https://live.staticflickr.com/65535/52919069089_4f9b54e131_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/obps/edcrscrutiny/apply/home"),
      },
      {
        name: t("Application for composition of offences - Form26"),
        Icon: 'https://live.staticflickr.com/65535/52919298260_7d4f971a64_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form26"),
      },
      {
        name: t("Application for Real Estate Project - Form34"),
        Icon: 'https://live.staticflickr.com/65535/52919069129_39ee000a4a_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form34"),
      },
      {
        name: t("Application for Change of Land Use"),
        Icon: 'https://live.staticflickr.com/65535/52919371468_12b6c2f069_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form34"),
      },
      {
        name: t("Application for permission of mobile tower"),
        Icon: 'https://live.staticflickr.com/65535/52919069099_3e46737a47_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form11"),
      },
      {
        name: t("Application for Appeal -Form 16"),
        Icon: 'https://live.staticflickr.com/65535/52926586726_37783830c6_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form16"),
      },
      {
        name: t("Application for NOC"),
        Icon: 'https://live.staticflickr.com/65535/52925993062_4896170e72_m.jpg',
        onClick: () => history.push("/digit-ui/citizen/services/form11"),
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
    <div>
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
        <img src='https://static.toiimg.com/photo/93246451.cms' alt="sukhkisarkar" />
        <div className="Search">
          <StandaloneSearchBar placeholder={t("CS_COMMON_SEARCH_PLACEHOLDER")} />
        </div>
      </div>

      <div className="ServicesSection">
        <CardBasedFormsOptions {...allCitizenServicesProps} />
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
    </div>
  );

};

export default CitizenProfile;
