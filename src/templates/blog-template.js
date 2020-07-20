import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/single-blog.module.css"

export const query = graphql`
    query getPost($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            title
            slug
            published(formatString: "MMMM Do YYYY")
            text {
                json
            }
        }
    }
`

const blogTemplate = ({ data }) => {
    const {
        title,
        published,
        text: { json },
    } = data.post

    // 'options' is from documentToReactComponents. using it to grab the images from rich text field.
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                return (
                    <img
                        src={node.data.target.fields.file["en-US"].url}
                        alt="blog"
                        alt="blog image"
                    />
                )
            },
            "embedded-entry-block": node => {
                const { title, image, text } = node.data.target.fields

                return (
                    <div>
                        <h1>{title["en-US"]}</h1>
                        <img
                            width="600"
                            src={image["en-US"].fields.file["en-US"].url}
                            alt="blog image"
                        />
                        {documentToReactComponents(text["en-US"])}
                    </div>
                )
            },
        },
    }

    return (
        <Layout>
            <SEO title={title} />
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>published at : {published}</h4>
                    <article className={styles.post}>
                        {documentToReactComponents(json, options)}
                    </article>
                    <AniLink fade to="/blog" className="btn-primary">
                        All Posts
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export default blogTemplate
