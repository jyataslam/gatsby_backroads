import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

export default function contact({data}) {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero>
        </Layout>
    )
}


export const query = graphql`
    {
        contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`