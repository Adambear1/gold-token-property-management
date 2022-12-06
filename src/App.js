import React from "react"

import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import BreadCrumb from "./components/Breadcrumb"
import Navbar from "./components/Navbar";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ListingsSection from "./components/ListingsSection";
import FAQSection from "./components/FAQSection";
import HomeSection from "./components/HomeSection";
import NavbarLoginMobile from "./components/NavbarLoginMobile";

function App() {
  const [select, setSelect] = React.useState("about");
  const obj = {
    'home': <HomeSection/>,
    'about': <AboutSection/>,
    'contact': <ContactSection/>,
    'listings': <ListingsSection/>,
    'faq': <FAQSection/>
  }
  return (
    <>
    <header>
      <Navbar/>
      {window.innerWidth < 500 && <NavbarLoginMobile/>}
      <Header/>
    </header>
    <body>
      <BreadCrumb select={select} setSelect={setSelect}/>
      {obj[select]}
      <Footer/>
    </body>
    </>
  );
}

export default App;
