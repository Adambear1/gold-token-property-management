import React from 'react';
import {MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBNavbar} from 'mdb-react-ui-kit';

export default function BreadCrumb({select, setSelect}) {
  return (
    <MDBNavbar expand='lg' light bgColor='light' className='m-5 text-center d-flex justify-content-center'>
      <MDBContainer fluid>
        <MDBBreadcrumb className="text-center d-flex justify-content-center">
          <MDBBreadcrumbItem active={
            select === "about"
          }>
            <a style={{cursor: "pointer"}} onClick={
              () => setSelect("about")
            }>About</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem className="text-center d-flex justify-content-center"
            active={
              select === "properties"
          }>
            <a style={{cursor: "pointer"}} onClick={
              () => setSelect("properties")
            }>Properties</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem className="text-center d-flex justify-content-center"
            active={
              select === "listings"
          }>
            <a style={{cursor: "pointer"}} onClick={
              () => setSelect("listings")
            }>Listings</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem className="text-center d-flex justify-content-center"
            active={
              select === "contact"
          }>
            <a style={{cursor: "pointer"}} onClick={
              () => setSelect("content")
            }>Contact</a>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBContainer>
    </MDBNavbar>
  );
}
