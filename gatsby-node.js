/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpProject(sort: { fields: [date] }) {
        nodes {
          title
          content
          date
          slug
          project {
            description
            projectType
            link {
              url
              text
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allWpProject.nodes.forEach(node => {
      createPage({
        path: `/project/${node.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: node,
      })
    })
  })
}
