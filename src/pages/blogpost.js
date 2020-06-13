import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/blogPost.scss"
import Pic from "../static/raj-profile-pic-100px.png"

class Blogpost extends Component {
  render() {
    return (
      <Layout location={this.props.location}>

        <div className="blogHeroContainer">
          <div className="blogHero">

            <div className="heroBlogTags">
              <span className={"heroBlogTag"}>
                TAG1
              </span>
              <span className={"heroBlogTag"}>
                TAG2
              </span>
              <span className={"heroBlogTag"}>
                TAG3
              </span>
            </div>

            <div className="heroBlogTitle">
              PROJECT BLOG TITLE
            </div>

            <div className="heroAuthorRow">

              <div className={"heroAuthorName"}>
                By Raj Rajhans  -
              </div>

              <div className="heroDate">
                February 10, 2019
              </div>

            </div>

            <div className="heroReadingTime">
              5 minute read
            </div>

          </div>
        </div>

        <div className="blogContentContainer">
          <div className="blogContent">

            <div className="blogImg">
              <img src={"https://miro.medium.com/max/1500/1*AjOEjnMXGxvi6p-FLr25NQ.jpeg"}/>
            </div>

            <div className="blogText">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna sit. Sit amet aliquam id diam maecenas ultricies mi eget. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Mi sit amet mauris commodo quis. Quisque id diam vel quam elementum pulvinar etiam non quam. Pretium nibh ipsum consequat nisl vel. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lorem dolor sed viverra ipsum nunc aliquet. Ornare suspendisse sed nisi lacus sed viverra. Amet luctus venenatis lectus magna fringilla urna. Integer feugiat scelerisque varius morbi enim nunc. Arcu cursus vitae congue mauris rhoncus aenean vel. Sagittis id consectetur purus ut faucibus pulvinar elementum. In fermentum posuere urna nec tincidunt praesent semper feugiat.</p>

              <p>Cras tincidunt lobortis feugiat vivamus. Egestas sed tempus urna et pharetra pharetra. A diam maecenas sed enim. Nulla malesuada pellentesque elit eget gravida. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pharetra massa massa ultricies mi quis hendrerit. Lectus arcu bibendum at varius. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Duis ut diam quam nulla porttitor massa id neque. Egestas purus viverra accumsan in nisl nisi scelerisque. In fermentum posuere urna nec tincidunt praesent semper feugiat. Et odio pellentesque diam volutpat commodo sed egestas egestas.</p>

              <p>Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida cum sociis natoque penatibus et magnis dis. Ut tortor pretium viverra suspendisse potenti nullam ac. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Interdum velit laoreet id donec ultrices. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Pretium aenean pharetra magna ac placerat vestibulum lectus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Curabitur vitae nunc sed velit dignissim sodales ut. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Tortor id aliquet lectus proin nibh nisl condimentum. Iaculis nunc sed augue lacus viverra. Vel risus commodo viverra maecenas accumsan lacus. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lacus vestibulum sed arcu non odio.</p>
            </div>

            <div className="blogBottomRow">
              <div className="blogBtmAthrRow">
                <div className="blogBtmAthrImg">
                  <img src={Pic} alt={"raj-rajhans"}/>
                </div>

                <div className="blogBtmAthrTxt">
                  <span className="blogBtmAthr">Author</span>

                  <div className="blogBtmAthrTxtName">
                    Raj Rajhans
                  </div>

                  <div className="blogBtmAthrBio">
                    Ambivert. Perpetually audacious. Tech aficionado, and a striving nonconformist
                  </div>
                </div>
              </div>

              <div className="blogBtmTags">
                <div className="blogBtmTagsTxt">Tags :</div>
                <div className="blogBtmTagsCntnr">
                  <span className={"heroBlogTag"}>
                    TAG1
                  </span>
                  <span className={"heroBlogTag"}>
                    TAG2
                  </span>
                  <span className={"heroBlogTag"}>
                    TAG3
                  </span>
                </div>
              </div>
            </div>

            </div>
        </div>

      </Layout>
    )
  }
}

export default Blogpost