import React from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';

export default function Navbar() {

  const showRegular = window.innerWidth < 400 ? {display: "none"} : {display: "block"}
  return (
    <>
      <MDBNavbar light bgColor='light' className='justify-content-center text-center'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src='https://t4.ftcdn.net/jpg/02/92/91/97/360_F_292919734_oT1OLfUKpUgNOh0jOKs9nLNS0KKAZLnE.jpg' height='30' alt='' loading='lazy'/>
            Gold Token Property Management
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#redirect-to-portal' style={showRegular}>
            <button style={
              {
                backgroundColor: "transparent",
                border: "none"
              }
            }>
              Client Portal</button>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
