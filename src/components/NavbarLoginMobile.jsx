import React from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';

function NavbarLoginMobile() {
  return (
    <MDBNavbar light bgColor='light' className='justify-content-center text-center'>
      <MDBContainer fluid  className='justify-content-center text-center'>
        <a href='#redirect-to-portal'>
          <button style={
            {
              backgroundColor: "transparent",
              border: "none"
            }
          }>
            Log Into Client Portal</button>
        </a>

      </MDBContainer>
    </MDBNavbar>
  )
}

export default NavbarLoginMobile
