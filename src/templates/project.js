import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Arrow from "../svgs/arrow.svg"
import FeaturedProjects from "../components/FeaturedProjects/featuredProjects"

import "../styles/project.scss"
import SEO from "../components/seo"

export default function Post({ pageContext, data, path }) {
  const content = pageContext
  let metaDesc = content.project.description
  if (metaDesc.length >= 150) {
    metaDesc = content.project.description.substring(0, 148) + "..."
  }

  return (
    <Layout path={path}>
      <SEO title={`Project - ${content.title}`} description={metaDesc} />
      <div className="Project">
        <div className="projectLanding">
          <div>
            <h1 className="title">{content.title}</h1>
            <h4
              className="year"
              dangerouslySetInnerHTML={{ __html: content.project.projectYear }}
            />
            {content.project.projectType != null && (
              <h4
                className="type"
                dangerouslySetInnerHTML={{
                  __html: content.project.projectType,
                }}
              />
            )}
            {content.project.link != null && (
              <a
                className="link"
                href={content.project.link.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">{content.project.link.text}</span>
                <Arrow className="arrow" />
              </a>
            )}
          </div>
          <div>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: content.project.description }}
            />
          </div>
        </div>
        <main>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </main>
      </div>
      {data.allWpProject != null && (
        <FeaturedProjects projects={data.allWpProject.edges} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpProject(
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "featured-project" } } }
        }
      }
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
