const path = require("path")

//CREATING PAGES PROGRAMATICALLY AND DYNAMICALLY

exports.createPages = async ({ graphql, actions }) => {
    // deconstruct createPage function from actions
    const { createPage } = actions

    // get slugs of all tours
    const { data } = await graphql(`
        query {
            tourExample: allContentfulTour {
                edges {
                    node {
                        slug
                    }
                }
            }
            post: allContentfulPosts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.tourExample.edges.forEach(({ node }) => {
        createPage({
            path: `tours/${node.slug}`,
            component: path.resolve("./src/templates/tour-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })
    data.post.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.slug}`,
            component: path.resolve("./src/templates/blog-template.js"),
            context: {
                slug: node.slug,
            },
        })
    })

    // Get amount of blog post for pagination style blog template
    const posts = data.post.edges;

    // Get amount of posts per page
    const postsPerPage = 6;

    // How many pages will we have?
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({length: numPages}).forEach((_, index) => {
        createPage({
            path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
            component: path.resolve("./src/templates/blog-list-template.js"),
            context: {
                skip: index * postsPerPage,
                limit: postsPerPage,
                numPages,
                currentPage: index + 1
            }
        })
    })
}
