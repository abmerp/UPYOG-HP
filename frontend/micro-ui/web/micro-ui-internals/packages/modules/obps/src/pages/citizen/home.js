import { BPAHomeIcon, BPAIcon, CitizenHomeCard, EDCRIcon, EmployeeModuleCard, Loader, Toast } from "@egovernments/digit-ui-react-components";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


const BPACitizenHomeScreen = ({ parentRoute }) => {
  const userInfo = Digit.UserService.getUser();
  const userRoles = userInfo?.info?.roles?.map((roleData) => roleData.code);
  const stateCode = Digit.ULBService.getStateId();
  const [stakeHolderRoles, setStakeholderRoles] = useState(false);
  const { data: stakeHolderDetails, isLoading: stakeHolderDetailsLoading } = Digit.Hooks.obps.useMDMS(
    stateCode,
    "StakeholderRegistraition",
    "TradeTypetoRoleMapping"
  );
  const [bpaLinks, setBpaLinks] = useState([]);
  const state = Digit.ULBService.getStateId();
  const { t } = useTranslation();
  const location = useLocation();
  const [params, setParams, clearParams] = Digit.Hooks.useSessionStorage("BPA_HOME_CREATE", {});
  const { data: homePageUrlLinks, isLoading: homePageUrlLinksLoading } = Digit.Hooks.obps.useMDMS(state, "BPA", ["homePageUrlLinks"]);
  const [showToast, setShowToast] = useState(null);
  const [totalCount, setTotalCount] = useState("-");

  const closeToast = () => {
    window.location.replace("/digit-ui/citizen/all-services");
    setShowToast(null);
  };

  const [searchParams, setSearchParams] = useState({
    applicationStatus: [],
  });
  let isMobile = window.Digit.Utils.browser.isMobile();
  const [pageOffset, setPageOffset] = useState(0);
  const [pageSize, setPageSize] = useState(window.Digit.Utils.browser.isMobile() ? 50 : 10);
  const [sortParams, setSortParams] = useState([{ id: "createdTime", sortOrder: "DESC" }]);
  const paginationParams = isMobile
    ? { limit: 10, offset: 0, sortBy: sortParams?.[0]?.id, sortOrder: sortParams?.[0]?.sortOrder }
    : { limit: pageSize, offset: pageOffset, sortBy: sortParams?.[0]?.id, sortOrder: sortParams?.[0]?.sortOrder };
  const inboxSearchParams = { limit: 10, offset: 0, mobileNumber: userInfo?.info?.mobileNumber };

  const { isLoading: bpaLoading, data: bpaInboxData } = Digit.Hooks.obps.useArchitectInbox({
    tenantId: stateCode,
    moduleName: "bpa-services",
    businessService: ["BPA_LOW", "BPA", "BPA_OC"],
    filters: {
      searchForm: {
        ...searchParams,
      },
      tableForm: {
        sortBy: sortParams?.[0]?.id,
        limit: pageSize,
        offset: pageOffset,
        sortOrder: sortParams?.[0]?.sortOrder,
      },
      filterForm: {
        moduleName: "bpa-services",
        businessService: [],
        applicationStatus: searchParams?.applicationStatus,
        locality: [],
        assignee: "ASSIGNED_TO_ALL",
      },
    },
    config: {},
    withEDCRData: false,
  });
  const { isLoading: isEDCRInboxLoading, data: { totalCount: edcrCount } = {} } = Digit.Hooks.obps.useEDCRInbox({
    tenantId: stateCode,
    filters: { filterForm: {}, searchForm: {}, tableForm: { limit: 10, offset: 0 } },
  });

  useEffect(()=>{
    if (location.pathname === "/digit-ui/citizen/obps/home"){
      Digit.SessionStorage.del("OBPS.INBOX")
      Digit.SessionStorage.del("STAKEHOLDER.INBOX")
    }
  },[location.pathname])

  useEffect(() => {
    if (!bpaLoading) {
      const totalCountofBoth = bpaInboxData?.totalCount || 0;
      setTotalCount(totalCountofBoth);
    }
  }, [bpaInboxData]);

  useEffect(() => {
    if (!stakeHolderDetailsLoading) {
      let roles = [];
      stakeHolderDetails?.StakeholderRegistraition?.TradeTypetoRoleMapping?.map((type) => {
        type?.role?.map((role) => {
          roles.push(role);
        });
      });
      const uniqueRoles = roles?.filter((item, i, ar) => ar.indexOf(item) === i);
      let isRoute = false;
      uniqueRoles?.map((unRole) => {
        if (userRoles?.includes(unRole) && !isRoute) {
          isRoute = true;
        }
      });
      if (!isRoute) {
        setStakeholderRoles(false);
        setShowToast({ key: "true", message: t("BPA_LOGIN_HOME_VALIDATION_MESSAGE_LABEL") });
      } else {
        setStakeholderRoles(true);
      }
    }
  }, [stakeHolderDetailsLoading]);

  useEffect(() => {
    if (!homePageUrlLinksLoading && homePageUrlLinks?.BPA?.homePageUrlLinks?.length > 0) {
      let uniqueLinks = [];
      homePageUrlLinks?.BPA?.homePageUrlLinks?.map((linkData) => {
        uniqueLinks.push({
          link: `${linkData?.flow?.toLowerCase()}/${linkData?.applicationType?.toLowerCase()}/${linkData?.serviceType?.toLowerCase()}/docs-required`,
          i18nKey: t(`BPA_HOME_${linkData?.applicationType}_${linkData?.serviceType}_LABEL`),
          state: { linkData },
          linkState: true,
        });
      });
      setBpaLinks(uniqueLinks);
    }
  }, [!homePageUrlLinksLoading]);

  useEffect(() => {
    clearParams();
  }, []);

  Digit.SessionStorage.set("EDCR_BACK", "IS_EDCR_BACK");

  if (showToast) return <Toast error={true} label={t(showToast?.message)} isDleteBtn={true} onClose={closeToast} />;

  if (stakeHolderDetailsLoading || !stakeHolderRoles || bpaLoading) {
    return <Loader />;
  } // || bparegLoading

  const homeDetails = [
    {
      Icon: <BPAHomeIcon />,
      moduleName: t("ACTION_TEST_BPA_STAKE_HOLDER_HOME"),
      name: "employeeCard",
      isCitizen: true,
      kpis: [
        {
          count: !(bpaLoading || isEDCRInboxLoading) && totalCount && edcrCount ? totalCount + edcrCount : "-",
          label: t("BPA_PDF_TOTAL"),
          link: `/digit-ui/citizen/obps/bpa/inbox`,
        },
      ],
      links: [
        {
          count: !bpaLoading ? totalCount : "-",
          label: t("ES_COMMON_OBPS_INBOX_LABEL"),
          link: `/digit-ui/citizen/obps/bpa/inbox`,
        },
        {
          count: !isEDCRInboxLoading ? edcrCount : "-",
          label: t("ES_COMMON_EDCR_INBOX_LABEL"),
          link: `/digit-ui/citizen/obps/edcr/inbox`,
        },
      ],
      className: "CitizenHomeCard",
      styles: {padding: "0px", minWidth: "90%", minHeight: "90%"}
    },
    {
      title: t("ACTION_TEST_EDCR_SCRUTINY"),
      Icon: <EDCRIcon className="fill-path-primary-main" />,
      links: [
        {
          link: `edcrscrutiny/apply`,
          i18nKey: t("BPA_PLAN_SCRUTINY_FOR_NEW_CONSTRUCTION_LABEL"),
        },
        {
          link: `edcrscrutiny/oc-apply`,
          i18nKey: t("BPA_OC_PLAN_SCRUTINY_FOR_NEW_CONSTRUCTION_LABEL"),
        },
      ],
      styles: {minWidth: "90%", minHeight: "90%"}
    },
    {
      title: t("ACTION_TEST_BPA_STAKE_HOLDER_HOME"),
      Icon: <BPAIcon className="fill-path-primary-main" />,
      links: bpaLinks,
      styles: {minWidth: "90%", minHeight: "90%"}
    },
  ];
  // const cards = [
  //   {
  //     title: 'Application for permission of Sub-division/Develoment of land',
  //     applied: 'Applied: 140',
  //     Approve: 'Approve: 30',
  //     Rejected: 'Rejected: 12',
  //     image: park
  //   },
  //   {
  //     title: 'Application for building plan Permission',
  //     applied: 'Applied: 143',
  //     Approve: 'Approve: 40',
  //     Rejected: 'Rejected: 22',
  //     image: building
  //   },
  //   {
  //     title: 'Application for composition of offences',
  //     applied: 'Applied: 196',
  //     Approve: 'Approve: 50',
  //     Rejected: 'Rejected: 2',
  //     image: foul,
  //   },
  //   {
  //     title: 'Application for Real Estate Project',
  //     applied: 'Applied: 218',
  //     Approve: 'Approve: 20',
  //     Rejected: 'Rejected: 42',
  //     image: investment
  //   },
  //   {
  //     title: 'Application for Change of Land Use',
  //     applied: 'Applied: 76',
  //     Approve: 'Approve: 10',
  //     Rejected: 'Rejected: 12',
  //     image: management
  //   },
  //   {
  //     title: 'Application for permission of mobile tower',
  //     applied: 'Applied: 96',
  //     Approve: 'Approve: 17',
  //     Rejected: 'Rejected: 32',
  //     image: antina
  //   }
  // ];

  const homeScreen = (
    <div className="mainContent citizenAllServiceGrid">
      {homeDetails.map((data) => {
        return (
          <div>
            {data.name === "employeeCard" ? <EmployeeModuleCard {...data} /> :
              <CitizenHomeCard header={data.title} links={data.links} Icon={() => data.Icon} styles={data?.styles} />}
          </div>
        )
      })}
    </div>
  )
  sessionStorage.setItem("isPermitApplication", true);
  sessionStorage.setItem("isEDCRDisable", JSON.stringify(false));
  return homeScreen;
  // return(
  //   <Grid container>
  //   <Grid item xs={12} md={2} sx={{ backgroundColor: '#1F4A7C', minHeight: '100vh' , marginTop: '10px'}}>
  //     <Typography variant="h6" sx={{ color: '#fff', padding: '20px' }}>Services <span><img src={dropdown} alt='drop' style={{width: '18px', height: '18px', color: 'blue'}}/></span></Typography>
  //     <Typography variant="h6" sx={{ color: '#fff', padding: '20px' }}>Reports <span><img src={dropdown} alt='drop' style={{width: '18px', height: '18px', color: '#fff'}}/></span></Typography>
  //   </Grid>
  //   <Grid item xs={12} md={10}>
  //   <Card sx={{ backgroundColor: '#1f4a7c', margin: '20px' }}>
  //   <CardContent>
  //     <Grid container spacing={2}>
  //       {cards.map((card, index) => (
  //         <Grid item xs={12} sm={6} md={4} key={index}>
  //           <Card sx={{ maxWidth: 345, width: '100%', height: '100%', margin: '10px', borderRadius:'10px',backgroundColor:'#F5F5FF', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
  //             <CardContent>
  //           <div style={{display: 'flex', flexDirection: 'row'}}>
  //             <CardMedia
  //                 component="img"
  //                 image={card.image}
  //                 alt={card.title}
  //                 sx={{ height: '100px', width: '100px', margin: '10px' }}
  //               />
  //               <Typography variant="p" component="div" style={{color: '#000033', fontSize: '16px', fontWeight: 'bold', margin: '15px' }}>
  //                 {card.title} 
  //               </Typography>
  //               </div>
  //               <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px'}}>
  //               <Typography sx={{ mb: 1.5, marginTop: '20px 10px -10px 10px' }} color="text.secondary">
  //                 {card.applied} <span><img src={check} alt='check' style={{width: '10px', height: '10px'}}/></span>
  //               </Typography>
  //               <Typography variant="body2" sx={{ mb: 1.5, marginTop: '20px 10px -10px 10px', fontWeight: 'bold' }}>
  //                 {card.Approve} <span><img src={list} alt='list' style={{width: '10px', height: '10px'}}/></span>
  //               </Typography>
  //               <Typography variant="body2">
  //                 {card.Rejected} <span><img src={remove} alt='remove' style={{width: '10px', height: '10px'}}/></span>
  //               </Typography>
  //               </div>
  //             </CardContent>
  //           </Card>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </CardContent>
  // </Card>
  // </Grid>
  // </Grid>
  // )
};

export default BPACitizenHomeScreen;
