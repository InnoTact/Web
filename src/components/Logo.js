import React from 'react'
import CenterContainer from '../components/CenterContainer'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const LogoStyle = {
  width: 120,
  height: 60,
  margin: 0
}

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      Logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fixed(width: 120, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <CenterContainer>
      <Link to='/'>
        {data ? <Img style={LogoStyle} fixed={data.Logo.childImageSharp.fixed} /> : null}
      </Link>
    </CenterContainer>
  )
}

export default Logo