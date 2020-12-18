import React, { useRef } from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/projects.scss"

export default ({ data }) => {
  const circleRef = useRef(null)
  const groups = data.allWpProject.group
  groups.sort(function (a, b) {
    return b.fieldValue - a.fieldValue
  })
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="Projects">
        <span className="circle" ref={circleRef} />
        {groups.map(group => {
          return (
            <div key={group.fieldValue} className="projectGroup">
              <h3 className="groupTitle">{group.fieldValue}</h3>
              <ul className="list">
                {group.edges.map(project => (
                  <li key={project.node.title} className="listItem">
                    <Link className="link" to={`/project/${project.node.slug}`}>
                      {project.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpProject {
      group(field: project___projectYear) {
        fieldValue
        edges {
          node {
            title
            slug
            project {
              projectYear
            }
          }
        }
      }
    }
  }
`
