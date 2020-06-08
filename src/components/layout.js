import React, {Fragment} from "react"
import { Link } from "gatsby"
import Navbar from "./header/navbar"
import Footer from "../components/footer"
import { rhythm, scale } from "../utils/typography"
import Head from "./head"

const Layout = ({ location, placeholder, customclass, children }) => {

  return (
    <Fragment>
      <Head/>
      <Navbar pathName={location.pathname} placeholder={placeholder === undefined ? true : placeholder} />

      <div className={"wrapper "+customclass}>{children}</div>

      <Footer/>
    </Fragment>
  )
}

export default Layout
