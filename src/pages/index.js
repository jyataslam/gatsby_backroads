import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/About"
import Services from "../components/Services"
import FeaturedTours from "../components/Home/FeaturedTours"
import PhotoBlock from "../components/Photo"
import Contact from "../components/Contact/Contact"

export default ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <StyledHero home="true" img={data.blogBcg.childImageSharp.fluid}>
                <Banner
                    title="live free. travel well."
                    info="Experience The Wonders Of The Natural World"
                >
                    <Link to="/tours" className="btn-white">
                        Explore Tours
                    </Link>
                </Banner>
            </StyledHero>
            <FeaturedTours />
            <Services />
            <About />

            <PhotoBlock img={data.photoBcg.childImageSharp.fluid} />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
    {
        photoBcg: file(relativePath: { eq: "photoBcg.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        blogBcg: file(relativePath: { eq: "blogBcg.webp" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
