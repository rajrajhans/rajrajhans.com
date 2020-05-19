import React, {Fragment} from "react"
import { Link } from "gatsby"
import Navbar from "./header/Navbar"
import Footer from "../components/footer"
import { rhythm, scale } from "../utils/typography"
import Head from "./head"

const Layout = ({ location, placeholder, children }) => {

  return (
    <Fragment>
      <Head/>
      <Navbar pathName={location.pathname} placeholder={placeholder === undefined ? true : placeholder} />

      <div className={"wrapper"}>{children}</div>

      <Footer/>
    </Fragment>
  )
}

export default Layout
