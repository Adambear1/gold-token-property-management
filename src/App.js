import React from "react"

import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import BreadCrumb from "./components/Breadcrumb"
import Navbar from "./components/Navbar";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [select, setSelect] = React.useState("about");
  const obj = {
    'about': <AboutSection/>
  }
  return (
    <>
    <header>
      <Navbar/>
      <Header/>
    </header>
    <body>
      <BreadCrumb select={select} setSelect={setSelect}/>
      {obj[select]}
    </body>
    </>
  );
}

export default App;
