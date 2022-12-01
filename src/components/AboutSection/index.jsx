import React from 'react'
import About from './About'
import Accordion from './Accordion'

export default function AboutSection() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <About src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAIvCZaj1l442cYt1uIAmQDXOfAOUXH_HARdaaj5fQw&s"}
            content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione error vitae perferendis, ab, doloribus modi ut nihil fuga aliquam, molestiae corporis voluptate odit officiis minima harum! Rerum magni mollitia voluptatibus."}
            title={"History"} className="p-2 m-2"/>
          <About src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCljTTMzA0JqwkBVYOwhPWW9G7HOsxG0QFjpYsCYtapg&s"}
            content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione error vitae perferendis, ab, doloribus modi ut nihil fuga aliquam, molestiae corporis voluptate odit officiis minima harum! Rerum magni mollitia voluptatibus."}
            title={"Our Philosophy"} className="p-2 m-2"/>

        </div>

        <div className="col-md-6 col-sm-12">
          <Accordion/>
        </div>
      </div>
    </div>
  )
}
