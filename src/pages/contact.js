import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../svgs/arrow.svg"

import "../styles/contact.scss"

export default ({ data }) => {
  const content = data.allWpPage.edges[0].node.contact
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="Contact">
        <div>
          <span className="titleWrapper">
            <h1
              className="title"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
          </span>
          <ul className="list">
            {content.links.map(link => (
              <li key={link.text} className="listItem">
                <a
                  className="link"
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPage(filter: { slug: { eq: "contact" } }) {
      edges {
        node {
          contact {
            title
            links {
              fieldGroupName
              link
              text
            }
          }
        }
      }
    }
  }
`
