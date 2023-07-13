import React from 'react';
import Card from './Components/Cards/Card';
// import DetailsAndLinks from './Components/Cards/DetailsAndLinks';
import CheckListAndForm from './Components/Cards/CheckListAndForm';
import images from './Components/data';
import GovtStrip from './Components/GovtStrip';
import Slideshow from './Components/ImageSlider';
import Footer from './Components/Footer';
import Navbar from './Components/NavMUI';
import NewsTicker from './Components/NewsTicker';
import Strip from './Components/Strip';
import OurServices from './Components/Cards/OurServices';
import FormLinks from './Components/Cards/FormLinks';
import DetailTable from './Components/Cards/DetailTable';
import Navbar1 from './Components/Navbar';
import Home from '.';
import { AboutUs } from './Components/AboutUs';
import Rules from './Components/Rules';
// import { AboutUs } from './Components/Pages/AboutUs';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Components/Pages/Home';
// import Header from './Components/Header';
// import Rules from './Components/Pages/Rules';
// import Acts from './Components/Pages/Acts';
// import ContactUs from './Components/Pages/ContactUs';
// import Notifications from './Components/Pages/Notifications';
// import Faq from './Components/Pages/Faq';
// import UserGuideManual from './Components/Pages/UserGuideManual';
// import OnlineUserServices from './Components/Pages/OnlineUserServices';
// import CheckList from './Components/Cards/CheckList';
// import CheckStatus from './Components/Pages/CheckStatus';
// import OfficerLogin from './Components/Pages/OfficerLogin';
// import FeeCalculator from './Components/Pages/FeeCalculator';

// import DetailsAndLinks from './Components/Cards/DetailsAndLinks';

function App() {
  return (
    <React.Fragment>
      {/* <Strip />
      <GovtStrip />
      <Navbar1 />
      <Slideshow images={images}/>
      <NewsTicker />
      <Card />
      <OurServices />
      <DetailTable /> */}
      
      {/* <DetailsAndLinks /> */}
      {/* <FormLinks />
      <CheckListAndForm />
      <Footer /> */}
      <Router>
      {/* <Header /> */}
      {/* <Home /> */}
        <Routes>
        <Route path="/" exact  element={<Home/>   }/>
        <Route path="/aboutus"  element={<AboutUs/>} />
        <Route path="/rules" element={<Rules/>} />
        <Route path="/acts" element={<Acts />}  />
        <Route path="/contactus" element={<ContactUs />}   />
        <Route path="/checkstatus" element={<CheckStatus/>}   />
        <Route path="/officerlogin" element={<OfficerLogin/>}   />
        <Route path="/notifications" element={<Notifications/>}/>
        <Route  path="/faq" element={<Faq/>}/>
        <Route path="/userguidemanual" element={<UserGuideManual/>}/>
        <Route path="/onlineuserservices" element={<OnlineUserServices/>}/>
        <Route path="/feeCalculator" element={<FeeCalculator/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App
