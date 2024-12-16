import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from './image/sevelogo.png'
import logo1 from './image/logo1.avif'
import logo2 from './image/logo2.png'
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
import logo5 from './image/logo5.png'

import './landing.css'
const LANDING = () => {
  function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className='bg-dark' position="static">
          <Toolbar >
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              < img src={logo} style={{ height: "80px", width: "100px" }} />
            </Typography>
            <Button color="inherit" className='me-4 text-light fw-bold'>Login</Button>
            <Button className='text-uppercase button text-light fw-bold '>book a demo</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return (
    <div> <div className='linear'>
      <ButtonAppBar />

      <div className='bg-warning text-center '>
        <p>Are you a <span className='fw-bold'>stylist</span> ? click here to go our  homepage for stylists</p>
      </div>

      <div className='container-fluid mt-5 mb-5 '>
        <div className='row mt-5 mb-5'>
          <div className='column text-center mt-5 mb-5'>
            <p className='text-uppercase text-dark '>Śeve for pr teams</p>
            <h1 className='display-4'>Leading <span className='fw-bold'>digital showrooms</span>  <br /> for fashion PR</h1>
            <p className='mt-4'>More Visible, more streamlined, more opportunities</p>
            <div className='text-center mb-5'><button className='text-uppercase rounded-pill navbutton mt-3'>book a demo</button></div>
          </div>
        </div>
      </div>
    </div>
      <div>
        <p className='text-center'>Our software is trusted by innovative PR teams around the world:</p>
      </div>
      <div className='contaier scroll'>
        <div className='row  '>
          <div className='column text-center d-flex justify-content-evenly  mediaquery'>
            <img src={logo1} style={{ width: "10rem", height: "8rem" }} className='mediaquery' />
            <img src={logo2} style={{ width: "10rem" }} className='mediaquery  ' />
            <img src={logo3} style={{ width: "10rem" }} className='mediaquery  ' />
            <img src={logo4} style={{ width: "10rem" }} className='mediaquery  ' />
            <img src={logo5} style={{ width: "10rem" }} className='mediaquery  ' />

          </div>
        </div>
      </div>
      <div className='container-fluid ' style={{ backgroundColor: "black" }}>
        <div className='row pb-5'>
          <div className='column d-flex justify-content-around mt-5 '>
            <div>
              <h2 className='text-light fw-bold'>350+</h2>
              <h5 className='text-light fw-bold'>Brands Showcased</h5>
            </div>
            <div>
              <h2 className='text-light fw-bold'>1300+ </h2>
              <h5 className='text-light fw-bold'>stylist Users</h5>

            </div>
            <div>
              <h2 className='text-light fw-bold'>60 seconds </h2>
              <h5 className='text-light fw-bold'>Collection Creation</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='mt-5 ps-5  bordp mb-5'>HOW IT HELPS</p>
      </div>
      <div className='container' style={{backgroundColor:"black",color:"white"}}>
        <div className='row'>
          <div className='column'>
            <div><h4>Showcase your collection in their besti life</h4></div>
            <div><h5>Elegant, requestable showrooms - graduate from Drive, Dropbox <br/>or WeTransfer links</h5></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LANDING 