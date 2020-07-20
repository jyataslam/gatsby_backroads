import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogCard from "./BlogCard"
import Title from "../Title"

import styles from "../../css/blog.module.css"

const getPosts = graphql`
    query {
        posts: allContentfulPost(sort: { fields: published, order: DESC }) {
            edges {
                node {
                    title
                    slug
                    id: contentful_id
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                    published(formatString: "MMMM Do YYYY")
                }
            }
        }
    }
`

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)

    return (
        <section className={styles.blog}>
            <Title title="Our" subtitle="Blogs" />
            <div className={styles.center}>
                {posts.edges.map(({node}) => {
                    console.log(node)
                    return <BlogCard key={node.id} blog={node} />
                })}
            </div>
        </section>
    )
}

export default BlogList
