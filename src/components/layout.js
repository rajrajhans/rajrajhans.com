import React, {Fragment} from "react"
import Navbar from "./header/navbar"
import Footer from "../components/footer"
import Head from "./head"

const Layout = ({ location, placeholder, customclass, customNavClass, children }) => {

  return (
    <Fragment>
      <Head/>
      <Navbar pathName={location.pathname} placeholder={placeholder === undefined ? true : placeholder} customNavClass={customNavClass} />

      <div className={"wrapper "+customclass}>{children}</div>

      <Footer/>
    </Fragment>
  )
}

export default Layout
