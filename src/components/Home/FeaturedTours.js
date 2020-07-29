import React from "react"
import Tour from "../Tours/Tour"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"

const getFeaturedTours = graphql`
    query featuredTours {
        featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
            edges {
                node {
                    name
                    country
                    price
                    slug
                    contentful_id
                    days
                    images {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {
    const response = useStaticQuery(getFeaturedTours)
    const featuredTours = response.featuredTours.edges

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="tours" />
            <p className={styles.desc}>
                Anywhere in the world you want to go, we can help get you there!
                From Japan to Bali to the Virgin Islands, our knowledgable tour
                guides will show you the unique places few have gotten to
                experience.
            </p>
            <div className={styles.center}>
                {featuredTours.map(({ node }) => {
                    return <Tour key={node.contentful_id} tour={node} />
                })}
            </div>
            <Link to="/tours" className="btn-primary">
                All Tours
            </Link>
        </section>
    )
}

export default FeaturedTours
