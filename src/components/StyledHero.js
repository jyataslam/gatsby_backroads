import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
    min-height: ${props => props.home ? '75vh': '50vh'};
    background: ${props =>
        props.home
            ? "linear-gradient(rgba(223, 60, 200, 0), rgba(0, 0, 0, 0.7))"
            : "linear-gradient(rgba(223, 60, 200, 0), rgba(0, 0, 0, 0.7))"};
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
