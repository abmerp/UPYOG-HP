import React from 'react';
import { AppBar, Toolbar, Button, Divider} from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import {FcHome} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const [anchorE5, setAnchorE5] = React.useState(null);
  const [anchorE6, setAnchorE6] = React.useState(null);

  const { path } = useRouteMatch();

  const handleClickAboutUs = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickRegulation = (event) => {
    setAnchorE2(event.currentTarget)
  }
  const handleClickNotifications = (event) => {
    setAnchorE3(event.currentTarget)
  }
  const handleActRules = (event) => {
    setAnchorE4(event.currentTarget)
  }
  const handleMedia = (event) => {
    setAnchorE5(event.currentTarget)
  }
  const handleClickGenral = (event) => {
    setAnchorE6(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null)
    setAnchorE3(null);
    setAnchorE4(null)
    setAnchorE5(null);
    setAnchorE6(null);
  };

  return (
    <AppBar position="static" style={{background: '#1F4A7C', height: '44px'}} >
      <Toolbar>
        <Button LinkComponent={Link} to='/digit-ui/citizen' color='inherit' style={{marginLeft: '70px', marginBottom: '18px', fontSize: '12px', color: 'white'}}><FcHome style={{width: '30px', height: '30px'}}/></Button>
        <Button color="inherit" onClick={handleClickAboutUs} style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>About Us</Button>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C'
          }
        }}
      >
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
          <Link style={{textDecoration: 'none', color: '#fff'}} to={`/digit-ui/citizen/objectives`}>
          OBJECTIVE 
          </Link>
        </MenuItem>       
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/organizational-setup'>
          ORGANIZATIONAL SETUP
        </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/contact-us'>
          CONTACT US
        </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/employeeprofile'>
          EMPLOYEE PROFILE
        </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/ex-employee-profile'>
          EX-EMPLOYEE PROFILE
        </Link>
        </MenuItem>        
        </Menu>
        <Button color="inherit" onClick={handleClickRegulation} style={{marginLeft: '30px', marginBottom: '18px',  color: 'white'}}>Planning Regulations</Button>
        <Menu
        anchorEl={anchorE2}
        open={Boolean(anchorE2)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C'
          }
        }}
      >
        <Button color='inherit' onClick={handleClickGenral} style={{color: '#fff', fontSize: '12px'}}>GENERAL<span style={{marginLeft: '200px'}}>{'>'}</span></Button>
        <Menu
        anchorEl={anchorE6}
        open={Boolean(anchorE6)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C',
            width: '150px',
            height: '100px',
            margin: '-40px 0px 0px 253px'
          }
        }}
      >
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/appendix-1'>
          APPENDIX-1
        </Link>
        </MenuItem> 
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/appendix-8'>
          APPENDIX-8
        </Link>
        </MenuItem> 
      </Menu>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/apartment-colonies-regulation'>
          APARTMENT/COLONIES REGULATION
        </Link>
        </MenuItem> 
        </Menu>
        <Link to="/digit-ui/citizen/development-plan" style={{textDecoration: 'none'}}>
          <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>
            Development Plan
          </Button>
        </Link>
        {/* <Button color="inherit" onClick={() => window.location('/development-plan')} style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Development Plan</Button> */}
        <Button color='inherit' onClick={handleClickNotifications} style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Notifications / Orders</Button>
        <Menu
        anchorEl={anchorE3}
        open={Boolean(anchorE3)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C'
          }
        }}
      >
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/court-orders'>
          COURT ORDERS
        </Link>
        </MenuItem> 
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/notifications-under-tcp-act'>
          NOTIFICATIONS UNDER TCP ACT
        </Link>
        </MenuItem> 
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/service-matter'>
          SERVICE MATTER
        </Link>
        </MenuItem> 
        </Menu>
        <Button color='inherit' onClick={handleActRules} style={{marginLeft: '30px', marginBottom: '18px', fontSize: '12px', color: 'white'}}>Act & Rules</Button>
        <Menu
        anchorEl={anchorE4}
        open={Boolean(anchorE4)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C'
          }
        }}
      >
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/delegation-of-powers'>
          DELEGATION OF POWER
        </Link>
        </MenuItem>
        </Menu>
        <Button color="inherit" onClick={handleMedia} style={{marginLeft: '30px', marginBottom: '18px',  fontSize: '12px', color: 'white'}}>Media</Button>
        <Menu
        anchorEl={anchorE5}
        open={Boolean(anchorE5)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#1F4A7C'
          }
        }}
      >
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/photo-gallery'>
          PHOTO GALLERY
        </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/video-gallery'>
          VIDEO GALLERY
        </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} style={{color: '#fff', fontSize: '12px'}}>
        <Link style={{textDecoration: 'none', color: '#fff'}} to='/digit-ui/citizen/heritage-gallery'>
          HERITAGE GALLERY
        </Link>
        </MenuItem>
        </Menu>
        <Button color="inherit" style={{marginLeft: '30px', marginBottom: '18px',  fontSize: '12px', color: 'white'}}>RTI</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar