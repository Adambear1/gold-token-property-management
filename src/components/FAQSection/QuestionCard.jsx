import React from 'react';
import {MDBCard, MDBCardHeader, MDBCardBody, MDBTypography} from 'mdb-react-ui-kit';

export default function QuestionCard({question, answer}) {
  return (
    <MDBCard className="m-2">
     
      <MDBCardHeader> <strong>Question: {"  "}</strong>{question}</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <strong>Answer: {"  "}</strong>
          <p>{answer}</p>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
}
