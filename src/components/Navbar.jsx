import React from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src='https://t4.ftcdn.net/jpg/02/92/91/97/360_F_292919734_oT1OLfUKpUgNOh0jOKs9nLNS0KKAZLnE.jpg' height='30' alt='' loading='lazy'/>
            Gold Token Property Management
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
