import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function About({src, content, title, cta}) {
  return (
    <MDBCard className="center align-center center-align m-2 justify-content-center text-center">
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage  src={src} style={{objectFit: "contain", justifyContent: "center", alignContent: "center", maxHeight: "200px"}} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {content}
        </MDBCardText>
       {cta && <MDBBtn href='#'>{cta}</MDBBtn>}
      </MDBCardBody>
    </MDBCard>
  );
}