import React from 'react';
import GovtStrip from './Govtstrip';
import Navbar from './Navbar';
import Strip from './Strip';



// import DetailsAndLinks from './Components/Cards/DetailsAndLinks';

function Header() {
  return (
    <div>

  <Strip/>
  <GovtStrip/>
  <Navbar/>
      </div>
  );
}

export default Header;