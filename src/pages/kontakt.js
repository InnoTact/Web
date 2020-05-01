import React, { Component } from "react"
import styled from "styled-components"
import Navbar from "./../components/Navbar"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import { navigateTo } from "gatsby-link"
import styles from "../styles/styles"
import { graphql } from "gatsby"
import CustomHelmet from "../components/CustomHelmet"
import ContactUsSection from "../components/ContactUsSection"
import LocalizedStrings from "react-localization"
import translation from "../translations/contact-us"

const ContactContainer = styled.div`
  width: 45%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    order: 1;
    width: 100%;
    margin-bottom: 4rem;
  }
`

class Contact extends Component {
  render() {
    const { data } = this.props
    const strings = new LocalizedStrings(translation)

    return (
      <React.Fragment>
        <CustomHelmet page="Kontakta " />
        <Navbar />
        <Hero
          text={strings.hero}
          imageData={data.HeroBackgroundImage.childImageSharp.fluid}
        />
        <ContactUsSection />
        <Footer />
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    HeroBackgroundImage: file(relativePath: { eq: "development9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact
