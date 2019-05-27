import React, { Component } from "react"
import SectionTop from "./../components/SectionTop"
import Section from "./../components/Section"
import Navbar from "./../components/Navbar"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import BackgroundImage from "../components/BackgroundImage"
import CustomHelmet from '../components/CustomHelmet'

class Success extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <CustomHelmet />
        <Navbar />

        <Hero
          header="Possibilites ahead!"
          subHeader="We will get back to you soon."
        >
          <BackgroundImage
            alt="Augmented Reality"
            fluid={data.HeroBackgroundImage.childImageSharp.fluid}
            fit="contain"
            height="100%"
            width="100%"
            style={{ bottom: 0, right: 0, position: "absolute" }}
          />
        </Hero>

        <Footer />
      </React.Fragment>
    )    
  }
}

export const pageQuery = graphql`
  query {
    HeroBackgroundImage: file(relativePath: { eq: "development1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Success