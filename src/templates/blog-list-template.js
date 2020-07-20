import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Title from "../components/Title"
import BlogCard from "../components/Blog/BlogCard"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/blog.module.css"

export const query = graphql`
    query getBlogPosts($skip: Int!, $limit: Int!) {
        posts: allContentfulPost(
            skip: $skip
            limit: $limit
            sort: { fields: published, order: DESC }
        ) {
            edges {
                node {
                    slug
                    title
                    id: contentful_id
                    published(formatString: "MMMM Do YYYY")
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const blogListTemplate = props => {
    const { currentPage, numPages } = props.pageContext
    const nextPage = `/blogs/${currentPage + 1}`
    const prevPage =
        currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
    const { data } = props

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    return (
        <Layout>
            <SEO title="Blogs" />
            <section className={styles.blog}>
                <Title title="Blog" subtitle="pagination" />
                <div className={styles.center}>
                    {data.posts.edges.map(({ node }) => {
                        return <BlogCard key={node.id} blog={node} />
                    })}
                </div>
                <section className={styles.links}>
                    {!isFirst && (
                        <AniLink fade to={prevPage} className={styles.link}>
                            Prev
                        </AniLink>
                    )}

                    {Array.from({ length: numPages }, (_, index) => {
                        return (
                            <AniLink
                                fade
                                key={index}
                                to={`/blogs/${index === 0 ? "" : index + 1}`}
                                className={
                                    index + 1 === currentPage
                                        ? `${styles.link} ${styles.active}`
                                        : `${styles.link}`
                                }
                            >
                                {index + 1}
                            </AniLink>
                        )
                    })}
                    {!isLast && (
                        <AniLink fade to={nextPage} className={styles.link}>
                            Next
                        </AniLink>
                    )}
                </section>
            </section>
        </Layout>
    )
}

export default blogListTemplate
