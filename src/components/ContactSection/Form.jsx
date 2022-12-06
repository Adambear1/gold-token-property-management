
import React from 'react';
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';

export default function Form() {
  return (
    <>
    <h1 className='justify-content-center text-center'>Or we can contact you</h1>
      <MDBInputGroup textBefore='Full Name' className='mb-3'>
        <input className='form-control' type='text' placeholder="Full name" />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3' textBefore='Location'>
        <input className='form-control' type='text' placeholder="City Name" />
      </MDBInputGroup>

      <label htmlFor='basic-url2' className='form-label'>
        By Email:
      </label>
      <MDBInputGroup className='mb-3' textBefore='email:'>
        <input className='form-control' id='basic-url2' type='email' placeholder='example@gmail.com' />
      </MDBInputGroup>
      <label htmlFor='basic-url2' className='form-label'>
        By Phone:
      </label>
      <MDBInputGroup className='mb-3' textBefore='phone:'>
        <input className='form-control' type='phone' placeholder='206-555-5555' />
      </MDBInputGroup>
    </>
  );
}