import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../svgs/arrow.svg"

import "../styles/contact.scss"

export default ({ data, path }) => {
  const content = data.allWpPage.edges[0].node.contact
  const coded = "A8cdc@A8cdcDcdFIc88.AvD"
  const key = "7WOCErTumL0bFwha5XlvSGq1PHYidMVD4BjzNIcJU8Qk9y62geKs3RpfZxotnA"
  const shift = coded.length
  let link = ""
  for (let i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      let ltr = coded.charAt(i)
      link += ltr
    } else {
      let ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
      link += key.charAt(ltr)
    }
  }
  return (
    <Layout path={path}>
      <SEO title="Contact" />
      <div className="Contact">
        <div>
          <span className="titleWrapper">
            <h1 className="title">
              <a
                className="email"
                target="_blank"
                rel="noreferrer"
                href={`mailto:${link}`}
              >
                {content.title}
              </a>
            </h1>
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
                  <Arrow className="arrow" />
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
