import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import CircleArrow from "../svgs/circle-arrow.svg"
import Squiggle from "../svgs/squiggle.svg"

import "../styles/home.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Home">
      <div className="landingContainer">
        <h1 className="title">
          Something about being a designer who likes to design things.
        </h1>
        <span className="accentWrapper">
          <p className="accent">Clara Marshall - Designer</p>
        </span>
        <CircleArrow className="arrow" />
      </div>

      <div className="threeGrid">
        <div className="itemOne">
          <h4 className="subtitle">Thoughts</h4>
        </div>
        <div className="itemTwo">
          <p className="paragraph">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want to turn a hobby into something more. Or maybe you
            have a creative project to share with the world. Whatever it is, the
            way you tell your story online can make all the difference.
          </p>
        </div>
        <div className="itemThree">
          <Squiggle className="squiggle" />
        </div>
      </div>

      <div className="threeGrid">
        <div className="itemOne">
          <h4 className="subtitle">Awards</h4>
        </div>
        <div className="itemTwo">
          <p className="bold">Applied Arts</p>
          <p className="paragraph">2018 - Website Design</p>
        </div>
        <div className="itemThree">
          <Squiggle className="squiggle" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
