import React from "react"
import styled from "styled-components"
import styles from "../styles/styles"

const Container = styled.div`
  text-align: center;
  width: 90%;
  max-width: 1244px;
  margin: 0 auto;
  height: 700px;

  @media (max-width: ${styles.breakpoints.md + "px"}) {
    width: 100%;
    height: 500px;
}
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Container {...props}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{
          width: '100%',
          height: '100%'
      }}
    />
  </Container>
)

export default Video