import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => {

    return (
        <Layout>
            <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                <Banner
                    title="continue exploring"
                    info="Explore the great outdoors before you die...get out there ya beautiful bitch"
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
