import React from 'react'
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Photo = ({ img, className, children, home }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(Photo)`
    height: 800px;
    width: 100;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 414px) {
        height: 600px;
    }
`
