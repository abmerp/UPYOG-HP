// import React, { useEffect } from "react";
// import { CitizenHomeCard, CaseIcon } from "@egovernments/digit-ui-react-components";

// export const Form11Links = ({ matchPath, userType }) => {
//     const { t } = useTranslation();
//     const [params, setParams, clearParams] = Digit.Hooks.useSessionStorage("PT_CREATE_TRADE", {});
  
//     useEffect(() => {
//       clearParams();
//     }, []);
  
//     const links = [
//       {
//         link: `/digit-ui/citizen/services/form11`,
//         i18nKey: t("TL_CREATE_TRADE"),
//       },
//       {
//         link: `${matchPath}/tradelicence/renewal-list`,
//         i18nKey: t("TL_RENEWAL_HEADER"),
//       },
//       {
//         link: `${matchPath}/tradelicence/my-application`,
//         i18nKey: t("TL_MY_APPLICATIONS_HEADER"),
//       },
//     ];
  
//     return <CitizenHomeCard header={t("ACTION_TEST_TRADE_LICENSE")} links={links} Icon={() => <CaseIcon className="fill-path-primary-main" />} />;
//   };
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 16
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textDecoration: 'none'
  },
  backButton: {
    marginBottom: 16, 
    display: 'flex',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 8, // Add some space between the icon and text
  },
  card: {
    width: '50%',
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: '#1F4A7C',
    marginBottom: 8,
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#f50057',
  },
}));

const Form11Links = () => {
  const classes = useStyles();

  const handleGoBack = () => {
    window.location.href = '/digit-ui/citizen/profile';
  };

  return (
    <div className={classes.root}>
      <div className={classes.backButton}>
        <Button variant="outlined" onClick={handleGoBack} style={{backgroundColor: '#1F4A7C', color: '#fff'}}>
          Back
        </Button>
      </div>
      <Typography variant="h4" component="h1" className={classes.heading}>
        <span style={{ fontWeight: 'bold' }}>Application for</span> permission of Subdivision/Development of land
      </Typography>
      <Card className={classes.card}>
        <CardContent>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Typography variant="h5" component="h2" className={classes.title}>
            Application Options
          </Typography>
          <Link
            href="/digit-ui/citizen/services/form11"
            className={classes.link}
            underline="none"
          >
            Apply
          </Link>
          <Link
            href="/digit-ui/citizen/services/form11/applications"
            className={classes.link}
            underline="none"
          >
            My Applications
          </Link>
          <Link
            href="/edit-application"
            className={classes.link}
            underline="none"
          >
            Renew Application
          </Link>
          </div>
          <img src='https://live.staticflickr.com/65535/52927092455_c29fba2435_m.jpg' alt='landapplication' style={{width: '200px', height: '200px', marginLeft: '100px'}}/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form11Links;
