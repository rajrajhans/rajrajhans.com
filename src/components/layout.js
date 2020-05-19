import React from "react"
import { Link } from "gatsby"
import Navbar from "./header/Navbar"
import Footer from "../components/footer"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar/>

      <main>{children}</main>

      <Footer/>
    </div>
  )
}

export default Layout
