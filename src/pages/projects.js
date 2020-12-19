import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import Link from "gatsby-link"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Arrow from "../svgs/arrow.svg"

import "../styles/projects.scss"

export default ({ data, path }) => {
  const circleRef = useRef(null)
  const [itemHovered, setItemHovered] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [circlePosition, setCirclePosition] = useState(null)
  const [listActive, setListActive] = useState(true)
  const groups = data.allWpProject.group
  groups.sort(function (a, b) {
    return b.fieldValue - a.fieldValue
  })

  const validatePosition = (top, bottom) => {
    let windowHeight = 1000
    if (window) {
      windowHeight = window.innerHeight
    }
    if (top <= 0) {
      return 0
    } else if (bottom >= windowHeight - 164) {
      return windowHeight - 328
    }
    return top - 164
  }

  const hoverProject = (e, project) => {
    const position = validatePosition(
      e.currentTarget.getBoundingClientRect().top,
      e.currentTarget.getBoundingClientRect().bottom
    )
    setCirclePosition(position)
    setActiveProject(project)
    setItemHovered(true)
    setListActive(false)
  }

  const hoverOffProject = () => {
    setCirclePosition(null)
    setItemHovered(false)

    setTimeout(() => {
      setListActive(true)
      setActiveProject(null)
    }, 750)
  }

  return (
    <Layout hideFooter={true} path={path}>
      <SEO title="Projects" />
      <div className="Projects">
        <div
          className={classnames("circle", itemHovered && "circleActive")}
          style={{
            top:
              itemHovered && circlePosition !== null
                ? `${circlePosition}px`
                : null,
          }}
          ref={circleRef}
          onMouseLeave={() => {
            hoverOffProject()
          }}
          role="button"
          tabIndex={itemHovered ? "0" : "-1"}
        >
          {activeProject !== null && itemHovered && (
            <Link to={`/project/${activeProject.node.slug}`} className="link">
              <span>
                <h2 className="title">{activeProject.node.title}</h2>
                <span className="arrowContainer">
                  <p>GO</p>
                  <Arrow className="arrow" />
                </span>
              </span>
            </Link>
          )}
        </div>
        <div className="projectsInner">
          {groups.map(group => {
            return (
              <div key={group.fieldValue} className="projectGroup">
                <h3 className="groupTitle">{group.fieldValue}</h3>
                <ul
                  className={classnames("list", !listActive && "listInactive")}
                >
                  {group.edges.map(project => (
                    <li key={project.node.title} className="listItem">
                      <Link
                        className="link"
                        to={`/project/${project.node.slug}`}
                        onMouseEnter={e => hoverProject(e, project)}
                      >
                        {project.node.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <div
            className={classnames("overlay", itemHovered && "overlayActive")}
          >
            {activeProject !== null && (
              <>
                {activeProject.node.featuredImage !== null && (
                  <Img
                    className="bgImage"
                    fluid={
                      activeProject.node.featuredImage.node.localFile
                        .childImageSharp.fluid
                    }
                  />
                )}
              </>
            )}
          </div>
        </div>
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
  }
`
