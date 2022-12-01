import React from 'react';
import {MDBAccordion, MDBAccordionItem} from 'mdb-react-ui-kit';

export default function Accordion() {

  return (
    <MDBAccordion initialActive={1}>
      <MDBAccordionItem alwaysOpen collapseId={1}
        headerTitle='Meet the Team' className='p-5 m-2'>
        <strong>Meet the Team: </strong>
        It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2}
        headerTitle='Regions we Serve' className='p-5 m-2'>
        <strong>Regions we Serve: </strong>
        It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3}
        headerTitle='Our Commitment' className='p-5 m-2'>
        <strong>Our Commitment: </strong>
        It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
