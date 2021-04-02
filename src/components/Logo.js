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
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      LogoLight: file(relativePath: { eq: "InnoTactLogoLight.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //   {
  //     LogoDark: file(relativePath: { eq: "InnoTactLogoDark.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 130) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <CenterContainer>
      <Link to="/">
        <Img
          style={LogoStyle}
          imgStyle={LogoStyle}
          fluid={light ? data.LogoLight.childImageSharp.fluid : data.LogoDark.childImageSharp.fluid }
          alt="Gatsby Docs are awesome"
        />
        {/* {data ? <Img fluid={data.file.childImageSharp.fluid} /> : null} */}
      </Link>
    </CenterContainer>
  )
}

export default Logo
