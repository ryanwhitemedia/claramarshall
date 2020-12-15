import React from "react"
import Layout from "../components/layout"

import Arrow from "../svgs/arrow.svg"

import "../styles/project.scss"

export default function Post({ pageContext }) {
  const data = pageContext
  console.log(data)
  return (
    <Layout>
      <div className="Project">
        <div className="projectLanding">
          <div>
            <h1 className="title">{data.title}</h1>
            <h4
              className="year"
              dangerouslySetInnerHTML={{ __html: data.project.projectYear }}
            />
            <h4
              className="type"
              dangerouslySetInnerHTML={{ __html: data.project.projectType }}
            />
            <a
              className="link"
              href={data.project.link.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text">{data.project.link.text}</span>
              <Arrow className="arrow" />
            </a>
          </div>
          <div>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: data.project.description }}
            />
          </div>
        </div>
        <main>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>
      </div>
    </Layout>
  )
}
