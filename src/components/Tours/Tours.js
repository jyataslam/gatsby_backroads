import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TourList from "./TourList"

const getTours = graphql`
    query getAllTours {
        tours: allContentfulTour {
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
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const Tours = () => {
    const { tours } = useStaticQuery(getTours);

    return (
        <section>
            <TourList tours={tours} />
        </section>
    )
}

export default Tours
