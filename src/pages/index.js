import React from "react"
import { Link, graphql } from "gatsby"

import SEO from '../components/SEO'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => {

    return (
        <Layout>
            <SEO title="Home" />
            <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                <Banner
                    title="live free. travel well."
                    info="Experience The Wonders Of The Natural World"
                >
                    <Link to="/tours" className="btn-white">
                        Explore Tours
                    </Link>
                </Banner>
            </StyledHero>
            <About />
            <Services />
            <FeaturedTours />
        </Layout>
    )
}

export const query = graphql`
    {
        defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
