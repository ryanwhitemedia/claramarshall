import React from "react"
import Layout from "../components/layout"

import Arrow from "../svgs/arrow.svg"
import FeaturedProjects from "../components/FeaturedProjects/featuredProjects"

import "../styles/project.scss"

export default function Post({ pageContext, data, path }) {
  const content = pageContext

  return (
    <Layout path={path}>
      <div className="Project">
        <div className="projectLanding">
          <div>
            <h1 className="title">{content.title}</h1>
            <h4
              className="year"
              dangerouslySetInnerHTML={{ __html: content.project.projectYear }}
            />
            <h4
              className="type"
              dangerouslySetInnerHTML={{ __html: content.project.projectType }}
            />
            <a
              className="link"
              href={content.project.link.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text">{content.project.link.text}</span>
              <Arrow className="arrow" />
            </a>
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
