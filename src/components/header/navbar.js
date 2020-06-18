import React, { Component, Fragment } from "react"
import Sidebar from "react-sidebar"
import DarkLightSwitcher from './darkLightSwitcher'
import Logo from './logo'
import {Hamburger} from "../../static/svgs"
import NavLinks from "./navLinks"
import SocialLinks from "./socialLinks"
import "../../styles/navbar.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function SidebarContents({pathName}) {

  if (typeof window !== `undefined`) {
    var currentTheme = localStorage.theme;
  }
  else{
    var currentTheme = 'light';
  }

  const getColor=(themeNow)=>(
    themeNow==='light'?"#3355FF":"#001681"
  )
  return(
    <div className={"sidebar-contents"}>
      <div className="logo">
        <AniLink cover bg={getColor(currentTheme)} direction={"up"} duration={0.75} to={"/"} style={{ textDecoration: 'none' }}>
          <Logo/>
        </AniLink>
      </div>

      <div className="links text-secondary">
        <NavLinks pathName={pathName}/>
      </div>

      <div className="social-links">
        <SocialLinks/>
      </div>
    </div>
  );
}

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarPlaceholderHeight : 100,
      sidebarOpen : false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
  }

  onSetSidebarOpen(open){
    this.setState({sidebarOpen : open})
  }

  menuOpen(event){
    event.preventDefault();
    this.onSetSidebarOpen(true);
  }

  componentDidMount() {
    this.changeNavbarPlaceholderHeight();

    let logo = this.nav.querySelector(".logo"),
      _this = this;

    logo.addEventListener("load", function() {
      _this.changeNavbarPlaceholderHeight();
    })

    this.changeNavbarHeight();
  }

  changeNavbarHeight(){
        /* While the name states changeNavbarHeight, this does not directly change the navbar height. It simply reduces the width of the logo, which reduces the height and thereby the overall navbar height.
        Also this slightly reduces the vertical padding
        */

        const vh35 = window.innerHeight * (35/100)

        window.addEventListener("scroll", function() {
          if (this.scrollY > vh35){
            document.querySelector("nav").classList.add("scrolled");
          } else {
            document.querySelector("nav").classList.remove("scrolled");
          }
        });
  }

  changeNavbarPlaceholderHeight(){
    let navBar = document.querySelector("nav");
    let navbarPlaceholderHeight = navBar.offsetHeight;
    this.setState({navbarPlaceholderHeight:navbarPlaceholderHeight});
  }

  render() {
    const placeholder = this.props.placeholder;
    if (typeof window !== `undefined`) {
      var currentTheme = localStorage.theme;
    }
    else{
      var currentTheme = 'light';
    }

    const getColor=(themeNow)=>(
      themeNow==='light'?"#3355FF":"#001681"
    )

    return (
      <Fragment>

        <Sidebar sidebar={<SidebarContents pathName={this.props.pathName}/>}
                 open={this.state.sidebarOpen}
                 onSetOpen={this.onSetSidebarOpen}
                 sidebarClassName={"sidebar-content"}
                 styles={{
                   sidebar: {
                     zIndex: 101,
                     position: "fixed"
                   },
                   overlay: {
                     zIndex: 100
                   },
                   dragHandle: {
                     position: "fixed",
                     zIndex: "99999"
                   }
                 }}
        >
          <span/>
        </Sidebar>

        <nav ref={c => (this.nav = c)} className={this.props.customNavClass}>
          <a href="#mobilenav" id="menu-open" onClick={this.menuOpen}>
                        <span className="icon">
                            <Hamburger />
                        </span>
          </a>
          <AniLink cover direction={"up"} bg={getColor(currentTheme)} duration={0.75} to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </AniLink>
          <NavLinks pathName={this.props.pathName} />
          <span className="switcher"><DarkLightSwitcher/></span>
        </nav>

      </Fragment>
    )
  }
}

export default Navbar