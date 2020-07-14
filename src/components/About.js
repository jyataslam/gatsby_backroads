import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Title from "../components/Title"

import styles from "../css/about.module.css"

// import aboutImage from "../images/defaultBcg.jpeg"

const getAboutImage = graphql`
    query aboutImage {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
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
                    <Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape"/>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Impedit provident libero recusandae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Impedit provident libero recusandae.
                    </p>
                    <Link to="/tours" className="btn-primary">
                        Read More
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default About
