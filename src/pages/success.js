import React, { Component } from "react"
import SectionTop from "./../components/SectionTop"
import Section from "./../components/Section"
import Navbar from "./../components/Navbar"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
    
        <Hero>
          <ContentWrapper>
            <SectionTop
              light
              header="Possibilites ahead!"
            >We will get back to you soon... bla bla</SectionTop>
          </ContentWrapper>
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

export default Success