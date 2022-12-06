import React from 'react';
import QuestionCard from './QuestionCard';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

function FAQSection() {
  const faq = [
    {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    },
    {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    },
    {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    },
    {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    }, {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    }, {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    }, {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    }, {
      question: "Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id ratione inventore possimus obcaecati rem unde amet debitis quasi, necessitatibus laboriosam? Numquam perspiciatis quaerat fugit ab ipsum similique. Ex, provident?"
    },
  ]

  return (
    <>
      <div className="container justify-content-center text-center mt-5 ">
        {/* <h1>FAQ</h1> */}
        <div className="row">
          <ResponsiveMasonry columnsCountBreakPoints={
            {
              350: 1,
              750: 2,
              900: 3
            }
          }>
            <Masonry> {
              faq.map(({
                question,
                answer
              }, index) => <QuestionCard key={index}
                question={question}
                answer={answer}/>)
            } </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  )
}

export default FAQSection
