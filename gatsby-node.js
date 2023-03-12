// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const response = await graphql(`
    query MyQuery {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `);
   
    response.data.allContentfulBlogPost.nodes.forEach((node) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.slug,
        },
      });
    });




    
  };
