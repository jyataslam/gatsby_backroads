import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from "../components/StyledHero"
import Banner from '../components/Banner'
import Layout from "../components/Layout"
import Day from "../components/SingleTour/Day"
import SEO from '../components/SEO'

import styles from "../css/template.module.css"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"

export const query = graphql`
    query($slug: String!) {
        tour: contentfulTour(slug: { eq: $slug }) {
            name
            price
            country
            days
            start(formatString: "dddd MMMM Do, YYYY")
            description {
                description
            }
            journey {
                day
                info
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

const tourTemplate = ({ data }) => {
    //destructure graphql data from contentful query about a specific slug
    const {
        name,
        price,
        country,
        days,
        start,
        description: { description },
        images,
        journey,
    } = data.tour

    //DESTRUCTURE ARRAY OF IMAGES
    // mainImage is a variable that [0] image will be assigned to
    // ...tourImages is a variable that will hold the rest of the images from db
    const [mainImage, ...tourImages] = images

    return (
        <Layout>
            <SEO title={name} />
            <StyledHero img={mainImage.fluid}>
                <Banner title={name} />
            </StyledHero>
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {tourImages.map((item, index) => {
                            return (
                                <Img
                                    key={index}
                                    fluid={item.fluid}
                                    alt="single tour image"
                                    className={styles.image}
                                />
                            )
                        })}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} />
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon} />
                            {country}
                        </p>
                    </div>
                    <h4>starts on : {start}</h4>
                    <h4>duration : {days} days</h4>
                    <p className={styles.desc}>
                        {description}
                    </p>
                    <h2>daily schedule</h2>
                    <div className={styles.journey}>
                        {journey.map((item, index) => {
                            return <Day key={index} day={item.day} info={item.info} />
                        })}
                    </div>
                    <AniLink to="/tours" className="btn-primary">back to tours</AniLink>
                </div>
            </section>
        </Layout>
    )
}

export default tourTemplate
