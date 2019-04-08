import React, { Component } from "react"
import SectionTop from "./../components/SectionTop"
import Section from "./../components/Section"
import Navbar from "./../components/Navbar"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import BackgroundImage from "../components/BackgroundImage"

class Success extends Component {
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Navbar />

        <Hero
          header="Possibilites ahead!"
          subHeader="We will get back to you soon... bla bla"
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
    
        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop
              dark
              header={`Lorem ipsum dolor`}
            >Id tempor ullamco cupidatat cillum eiusmod. Labore aliquip laboris enim incididunt laboris ad velit. Consequat sit nulla consectetur amet enim commodo cillum nulla Lorem qui magna.</SectionTop>
          </ContentWrapper>
        </Section>
    
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