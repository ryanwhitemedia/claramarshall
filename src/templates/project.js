import React from "react"
import Layout from "../components/layout"
// import { graphql } from "gatsby"

export default function Post({ pageContext }) {
  const data = pageContext
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <main>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>
      </div>
    </Layout>
  )
}
