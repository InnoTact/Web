import React from "react"
import CenterContainer from "../components/CenterContainer"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoStyle = {
  width: 120,
  height: 60,
  margin: 0,
  objectFit: "contain",
}

const Logo = ({ light }) => {
  const data = useStaticQuery(graphql`
    query {
      LogoDark: file(relativePath: { eq: "InnoTactLogoDark.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      LogoLight: file(relativePath: { eq: "InnoTactLogoLight.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
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
        {/* {data ? <Img fluid={data.file.childImageSharp.fluid} /> : null} */}
      </Link>
    </CenterContainer>
  )
}

export default Logo
