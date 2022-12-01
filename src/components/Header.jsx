import React from 'react';
import {MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem className='w-100 d-block'
        style={
          {
            maxHeight: "650px",
            objectFit: "cover"
          }
        }
        itemId={1}
        src='https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg'
        alt='...'>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem className='w-100 h-50 d-block'
        itemId={2}
        style={
          {
            maxHeight: "650px",
            objectFit: "cover"
          }
        }
        src='https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?cs=srgb&dl=pexels-david-mcbee-1486785.jpg&fm=jpg'
        alt='...'>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem className='w-100 h-50 d-block'
        style={
          {
            maxHeight: "650px",
            objectFit: "cover"
          }
        }
        itemId={3}
        src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?cs=srgb&dl=pexels-scott-webb-1029599.jpg&fm=jpg'
        alt='...'>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}
