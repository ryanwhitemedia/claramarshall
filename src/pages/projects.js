import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import Link from "gatsby-link"
import Img from "gatsby-image"

import useLayout from "../utils/hooks/use-layout"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Arrow from "../svgs/arrow.svg"

import "../styles/projects.scss"

export default ({ data, path }) => {
  const circleRef = useRef(null)
  const [itemHovered, setItemHovered] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [circlePosition, setCirclePosition] = useState(null)
  const [linkInactive, setLinkInactive] = useState(false)
  const { screenLayout } = useLayout()
  const projects = data.allWpProject.edges
  let projectGroups = {}
  for (let i = 0; i < projects.length; i++) {
    const year = projects[i].node.date.slice(0, 4)
    if (projectGroups[year]) {
      projectGroups[year].push(projects[i])
    } else {
      projectGroups[year] = [projects[i]]
    }
  }

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
    if (!linkInactive) {
      const position = validatePosition(
        e.currentTarget.getBoundingClientRect().top,
        e.currentTarget.getBoundingClientRect().bottom
      )
      setCirclePosition(position)
      setActiveProject(project)
      setItemHovered(true)
      setLinkInactive(true)
    }
  }

  const hoverOffProject = () => {
    if (!screenLayout.mobile && !screenLayout.tablet) {
      setCirclePosition(null)
      setItemHovered(false)

      setTimeout(() => {
        setLinkInactive(false)
      }, 450)
    }
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
          role="button"
          tabIndex={itemHovered ? "0" : "-1"}
        >
          {activeProject !== null && (
            <Link
              to={`/project/${activeProject.node.slug}`}
              className={classnames("link", itemHovered && "showText")}
            >
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
          {Object.entries(projectGroups).map(([year, group]) => {
            return (
              <div key={year} className="projectGroup">
                <h3
                  className="groupTitle"
                  dangerouslySetInnerHTML={{ __html: year }}
                />
                <ul className="list">
                  {group.map(project => (
                    <li key={project.node.title} className="listItem">
                      <Link
                        onMouseEnter={e => hoverProject(e, project)}
                        onMouseLeave={() => {
                          hoverOffProject()
                        }}
                        className={classnames(
                          "link",
                          activeProject !== null &&
                            linkInactive &&
                            project !== activeProject &&
                            "inactiveLink"
                        )}
                        to={`/project/${project.node.slug}`}
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
    allWpProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          date
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                  fluid(maxWidth: 2000, quality: 100) {
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
