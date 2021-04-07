import React from "react"
import CenterContainer from "../components/CenterContainer"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoStyle = {
  width: 140,
  height: 70,
  margin: 0,
  objectFit: "contain",
}

const Logo = ({ light }) => {
  const data = useStaticQuery(graphql`
    query {
      LogoDark: file(relativePath: { eq: "InnoTactLogoDark.png" }) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      LogoLight: file(relativePath: { eq: "InnoTactLogoLight.png" }) {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <CenterContainer>
      <Link to="/">
        <Img
          style={LogoStyle}
          imgStyle={LogoStyle}
          fluid={light ? data.LogoLight.childImageSharp.fluid : data.LogoDark.childImageSharp.fluid }
          alt="InnoTact Logo"
        />
      </Link>
    </CenterContainer>
  )
}

export default Logo
