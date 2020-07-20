import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../components/Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/about.module.css"

const getAboutImage = graphql`
    query aboutImage {
        aboutImage: file(relativePath: { eq: "aboutBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAboutImage)

    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <Img
                        fluid={aboutImage.childImageSharp.fluid}
                        alt="awesome landscape"
                    />
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Find Your Place</h4>
                    <p>
                        Across the globe, there are alluring destinations that
                        beckon would-be travelers from both near and far.
                        They're destinations that boast shimmering turquoise
                        waters, white-sandy beaches, snow-capped mountains,
                        exotic jungles, private islands, bustling metropolises,
                        and even arid deserts.
                    </p>
                    <p>
                        No matter what type of experience a traveler is looking
                        for, nor the type of travel they're after -- from hotel
                        suites, to villas or condos, car rentals, flights,
                        cruises and beyond -- there's something available out
                        there for everyone.
                    </p>
                    <AniLink fade to="/blog" className="btn-primary">
                        Read More
                    </AniLink>
                </article>
            </div>
        </section>
    )
}

export default About
