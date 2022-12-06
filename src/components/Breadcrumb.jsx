import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function Navbar({select, setSelect}) {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBCollapse navbar={true} show={true} center className='justify-content-center'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active={select === "home"} aria-current='page' onClick={()=> setSelect("home")} className="justify-content-center text-center">
              <a style={{cursor: "pointer"}} onClick={
              () => setSelect("home")
            }>Home</a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={select === "about"} aria-current='page' onClick={()=> setSelect("about")} className="justify-content-center text-center">
              <a style={{cursor: "pointer"}} onClick={
              () => setSelect("about")
            }>About</a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={select === "listings"} aria-current='page' onClick={()=> setSelect("listings")} className="justify-content-center text-center">
              <a style={{cursor: "pointer"}} onClick={
              () => setSelect("listings")
            }>Listings</a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={select === "faq"} aria-current='page' onClick={()=> setSelect("faq")} className="justify-content-center text-center">
              <a style={{cursor: "pointer"}} onClick={
              () => setSelect("faq")
            }>FAQ</a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={select === "contact"} aria-current='page' onClick={()=> setSelect("contact")} className="justify-content-center text-center">
              <a style={{cursor: "pointer"}} onClick={
              () => setSelect("content")
            }>Contact</a>
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}