import React from "react"
import { Link } from "gatsby"
import Header from "./header/header"
import Footer from "../components/footer"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ children }) => {

  return (
    <div>
      <Header/>

      <main>{children}</main>

      <Footer/>
    </div>
  )
}

export default Layout
