import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CircleArrow from "../svgs/circle-arrow.svg"
import Squiggle from "../svgs/squiggle.svg"

import "../styles/home.scss"

export default ({ data }) => {
  const content = data.allWpPage.edges[0].node.home
  const heroText = content.heroText.replace("<p>", "").replace("</p>", "")
  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <div className="landingContainer">
          <h1
            className="title"
            dangerouslySetInnerHTML={{ __html: heroText }}
          />
          <span className="accentWrapper">
            <p
              className="accent"
              dangerouslySetInnerHTML={{ __html: content.tagline }}
            />
          </span>
          <CircleArrow className="arrow" />
        </div>

        {content.items.map(item => (
          <div className="threeGrid">
            <div className="itemOne">
              <h4
                className="subtitle"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
            <div
              className="itemTwo"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
            <div className="itemThree">
              <Squiggle className="squiggle" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPage(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          home {
            heroText
            tagline
            items {
              content
              fieldGroupName
              title
            }
          }
        }
      }
    }
  }
`
