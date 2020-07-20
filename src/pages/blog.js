import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import BlogList from '../components/Blog/BlogList'

const blog = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
            <BlogList />
        </Layout>
    )
}

export const query = graphql`
    {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default blog
