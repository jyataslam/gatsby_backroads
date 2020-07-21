import React, { Component } from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Tours from '../components/Tours/Tours'
import SEO from '../components/SEO'

export default class tours extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Tours" />
                <StyledHero img={this.props.data.blogBcg.childImageSharp.fluid}/>
                <Tours />
            </Layout>
        )
    }
}


export const query = graphql`
    {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`