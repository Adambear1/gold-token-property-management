import React from 'react'
import Form from './Form'

function ContactSection() {
  return (
   <>
   <div className="container mt-5">
   {/* <h1 className='justify-content-center text-center'>Contact Us</h1> */}
    <div className="row">

      <div className="col-12 col-sm-6">
      <h1 className='justify-content-center text-center'>Contact Us</h1>
        <p>
          <strong>
            Physical Location:{" "}
          </strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sequi asperiores eveniet officiis dolorem at eos fugiat est minus ut, excepturi suscipit voluptas tenetur sed laboriosam eius, totam hic provident.
          <br />
          <strong>
            Email:{" "}
          </strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sequi asperiores eveniet officiis dolorem at eos fugiat est minus ut, excepturi suscipit voluptas tenetur sed laboriosam eius, totam hic provident.
          <br />
          <strong>
            Phone Number:{" "}
          </strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sequi asperiores eveniet officiis dolorem at eos fugiat est minus ut, excepturi suscipit voluptas tenetur sed laboriosam eius, totam hic provident.
        </p>
      </div>
      <div className="col-12 col-sm-6">
      <Form/>
      </div>
    </div>
   </div>
   </>
  )
}

export default ContactSection