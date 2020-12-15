import React from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/contact.scss"

export default ({ data }) => {
  const projects = data.allWpProject.edges
  console.log(projects)
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="Projects">
        <ul className="list">
          {projects.map(project => (
            <li key={project.node.title} className="listItem">
              <Link className="link" to={`/project/${project.node.slug}`}>
                {project.node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpProject(sort: { fields: project___projectYear }) {
      edges {
        node {
          id
          title
          slug
          project {
            projectYear
          }
        }
      }
    }
  }
`
