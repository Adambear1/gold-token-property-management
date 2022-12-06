import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Card({src, listingDate, description}) {
  return (
    <MDBCard className='m-2'>
      <MDBCardImage src={src} alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          {description}
        </MDBCardText>
        <strong>Listing Date: {"  "}</strong>
        <small>{listingDate}</small>
        <br />
        <strong>Days Listed: {"  "}</strong>
        <small>{Math.round((new Date() - new Date(listingDate)) / (1000 * 60 * 60 * 24))} Days Listed</small>
      </MDBCardBody>
    </MDBCard>
  );
}