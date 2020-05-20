import React, { Component } from "react"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/about.scss"
import {AboutSVG} from "../static/svgs"

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <HerosectionPage title={"About"} subtitle={"some gay shit"} svg={<AboutSVG/>}/>

        <div className={"content-container"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Amet massa vitae tortor condimentum lacinia quis vel eros. Fames ac turpis egestas maecenas pharetra. Mattis vulputate enim nulla aliquet. Ornare arcu dui vivamus arcu felis bibendum ut. Ut tellus elementum sagittis vitae et leo duis ut diam. Massa vitae tortor condimentum lacinia quis vel eros. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Est placerat in egestas erat imperdiet sed. At quis risus sed vulputate odio ut enim blandit. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Amet consectetur adipiscing elit duis tristique sollicitudin nibh.

        Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Blandit libero volutpat sed cras ornare arcu dui. Risus nullam eget felis eget. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Lacus laoreet non curabitur gravida arcu ac tortor. Euismod in pellentesque massa placerat duis ultricies lacus sed. Cursus sit amet dictum sit amet justo donec enim. Tortor consequat id porta nibh venenatis cras sed. Arcu ac tortor dignissim convallis aenean. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Pretium nibh ipsum consequat nisl vel pretium lectus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tristique senectus et netus et malesuada fames ac turpis.

        Leo integer malesuada nunc vel risus commodo viverra. Lorem donec massa sapien faucibus et. Ornare massa eget egestas purus. Elementum eu facilisis sed odio morbi quis commodo odio. Eleifend mi in nulla posuere. Hendrerit gravida rutrum quisque non. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dapibus ultrices in iaculis nunc sed augue. Eros donec ac odio tempor orci dapibus ultrices. Quisque egestas diam in arcu cursus euismod. Nulla pellentesque dignissim enim sit amet venenatis urna. Egestas sed tempus urna et pharetra pharetra. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea. Nunc id cursus metus aliquam eleifend mi in nulla. Euismod elementum nisi quis eleifend quam adipiscing vitae. Etiam sit amet nisl purus in mollis nunc sed id. Porta non pulvinar neque laoreet suspendisse interdum consectetur.

        Enim ut tellus elementum sagittis vitae et leo. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Nec feugiat nisl pretium fusce id velit ut tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Egestas pretium aenean pharetra magna. Lorem ipsum dolor sit amet consectetur adipiscing. Lectus magna fringilla urna porttitor rhoncus dolor. Blandit turpis cursus in hac habitasse. Magnis dis parturient montes nascetur ridiculus mus mauris. Duis convallis convallis tellus id interdum velit laoreet id donec. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.

        Eget egestas purus viverra accumsan in nisl nisi. Lectus sit amet est placerat in egestas. Arcu felis bibendum ut tristique. Ac tortor dignissim convallis aenean et tortor at risus viverra. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Est ullamcorper eget nulla facilisi etiam dignissim diam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nullam eget felis eget nunc lobortis mattis. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Nunc sed velit dignissim sodales ut.
        </div>
      </Layout>
    )
  }
}

export default About