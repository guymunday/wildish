const _ = require("lodash");

const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const casestudyTemplate = require.resolve("./src/templates/case-study.js");
  const blogTemplate = require.resolve("./src/templates/blog.js");
  const pageTemplate = require.resolve("./src/templates/page.js");

  const result = await wrapper(
    graphql(`
      {
        casestudyData: allWpCaseStudy {
          edges {
            node {
              id
              slug
              title
            }
            previous {
              slug
              id
              title
            }
            next {
              slug
              title
              id
            }
          }
        }
        blogData: allWpPost {
          edges {
            node {
              title
              slug
            }
          }
        }
        pageData: allWpGqlPage {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
  );

  const casestudyResults = result.data.casestudyData.edges;
  const blogResults = result.data.blogData.edges;
  const pageResults = result.data.pageData.edges;

  casestudyResults.forEach((edge) => {
    createPage({
      path: `/case-studies/${edge.node.slug}`,
      component: casestudyTemplate,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,

        nextId: edge.previous ? edge.previous.id : "null",
        nextSlug: edge.previous ? edge.previous.slug : "null",
        nextTitle: edge.previous ? edge.previous.title : "null",

        previousId: edge.next ? edge.next.id : "null",
        previousSlug: edge.next ? edge.next.slug : "null",
        previousTitle: edge.next ? edge.next.title : "null",
      },
    });
  });

  blogResults.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
      },
    });
  });

  pageResults.forEach((edge) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
      },
    });
  });
};
