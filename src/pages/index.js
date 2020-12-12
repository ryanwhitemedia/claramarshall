import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Large Heading Text h1</h1>
    <h2>Large Heading Text h2</h2>
    <h3>Small Headline</h3>
    <h4>Pre Header</h4>
    <h5>Large Heading Text h5</h5>
    <h6>Large Heading Text h6</h6>
    <p>
      Paragraph Large - It all begins with an idea. Maybe you want to launch a
      business. Maybe you want to turn a hobby into something more. Or maybe you
      have a creative project to share with the world. Whatever it is, the way
      you tell your story online can make all the difference.{" "}
    </p>
    <a href="/test">Here is a Link</a>
  </Layout>
)

export default IndexPage
