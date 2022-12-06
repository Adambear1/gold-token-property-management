import React from 'react'
import Card from './Card'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function ListingsSection() {
  const house_placeholder = "https://ecowellness.com/wp-content/uploads/2017/04/property.jpg";
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis magni obcaecati hic nostrum iure earum iusto accusantium id reiciendis, explicabo sit molestiae, ea natus eaque minima ipsam, accusamus molestias!";
  const listings = [
    {
      src: house_placeholder,
      description,
      listingDate: "06/20/2022"
    },
    {
      src: house_placeholder,
      description,
      listingDate: "09/19/2022"
    },
    {
      src: house_placeholder,
      description,
      listingDate: "05/14/2022"
    },
    {
      src: house_placeholder,
      description,
      listingDate: "12/01/2022"
    }, {
      src: house_placeholder,
      description,
      listingDate: "11/20/2022"
    }, {
      src: house_placeholder,
      description,
      listingDate: "08/01/2022"
    }, {
      src: house_placeholder,
      description,
      listingDate: "06/20/2022"
    },
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          <ResponsiveMasonry columnsCountBreakPoints={
            {
              350: 1,
              750: 2,
              900: 3
            }
          }>
            <Masonry> {
              listings.map(({
                src,
                listingDate,
                description
              }, index) => (
                <Card src={src}
                  listingDate={listingDate}
                  description={description}
                  key={index}/>
              ))
            } </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  )
}

export default ListingsSection
