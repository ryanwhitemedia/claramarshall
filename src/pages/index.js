import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CircleArrow from "../svgs/circle-arrow.svg"
import Squiggle from "../svgs/squiggle.svg"

import "../styles/home.scss"

export default ({ data, path }) => {
  const content = data.allWpPage.edges[0].node.home
  const heroText = content.heroText.replace("<p>", "").replace("</p>", "")
  let linkText = useRef({ current: null })
  useEffect(() => {
    linkText.current = document.querySelector("#title strong")
    if (linkText.current) {
      linkText.current.addEventListener("click", () => scrollTo("#thoughts"))
    }
  }, [linkText])
  return (
    <Layout path={path}>
      <SEO
        title="Home"
        description="Based in Toronto, Clara is a creative soul who believes anything can be made beautiful and that a perfect balance of function and beauty leads to a happy life."
      />
      <div className="Home">
        <div className="landingContainer">
          <h1
            id="title"
            className="title"
            dangerouslySetInnerHTML={{ __html: heroText }}
          />
          <span className="accentWrapper">
            <p
              className="accent"
              dangerouslySetInnerHTML={{ __html: content.tagline }}
            />
          </span>
          <button className="arrow" onClick={() => scrollTo("#thoughts")}>
            <CircleArrow />
          </button>
        </div>

        <div id="thoughts">
          {content.items.map(item => (
            <div className="threeGrid" key={item.title}>
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
