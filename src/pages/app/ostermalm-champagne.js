import { graphql } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: black;
    align-items: center;
    // justify-content: center;
`

const ImageStyle = {
    width: '100vw',
    margin: '1.2rem 0',
    maxHeight: '70vh'
}

const InnerImgStyle = {
    objectFit: 'contain'
}
export const pageQuery = graphql`
    query {
        EtiquetteImage: file(relativePath: {eq: "ostermalm_champagne.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default function OstermalmChampagne({ data }) {
    return <Container>
        <Img fluid={data.EtiquetteImage.childImageSharp.fluid} style={ImageStyle} imgStyle={InnerImgStyle} />
        <div>
            <audio controls autoPlay src="https://storage.googleapis.com/innotact-resources/spoken-pictures/audio/ostermalm-champagne.mp3">Unfortunately your browser does not support the feature to play this audio.</audio>
        </div>
    </Container>
}