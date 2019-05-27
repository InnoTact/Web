import React, { Component } from "react"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import Navbar from "./../components/Navbar"
import Section from "./../components/Section"
import CenterContainer from "./../components/CenterContainer"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Text from "../components/Text"
import Button from "../components/Button"
import { navigateTo } from "gatsby-link"
import styles from "../styles/styles"
import SubHeader from "../components/SubHeader"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import { graphql } from "gatsby"
import BackgroundImage from "../components/BackgroundImage"
import CustomHelmet from '../components/CustomHelmet'

const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 2rem;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    align-items: center;
  }
`

const ContactContainer = styled.div`
  width: 45%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    order: 1;
    width: 100%;
    margin-bottom: 4rem;
  }
`

const PhoneContainer = styled(ContactContainer)`
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    width: 100%;
    order: 2;
  }
`

const CallUsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const Anchor = styled.a`
  display: "inline";
  margin-bottom: 0;
  color: ${colors.primary};
  font-size: 1.1rem;

  :hover {
    color: ${colors.primaryLowLighten};
    cursor: pointer;
  }

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1rem;
  }
`

class Contact extends Component {
  state = {
    formFilled: false,
    name: "",
    email: "",
    message: "",
    emailValid: false,
    nameValid: false,
  }

  updateState = (type, event) => {
    const newState = { ...this.state }
    newState[type] = event.target.value
    newState["emailValid"] = this.validateEmail(newState["email"])
    newState["nameValid"] = this.validateName(newState["name"])

    if (
      newState.name &&
      newState.email &&
      newState.emailValid &&
      newState.nameValid
    ) {
      newState.formFilled = true
    } else {
      newState.formFilled = false
    }

    this.setState(newState)
  }

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  validateName(name) {
    const re = /^[a-ö ,.'-]+$/i
    return re.test(String(name).toLowerCase())
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    navigateTo(form.getAttribute("action"))
  }

  render() {
    const {
      emailValid,
      email,
      nameValid,
      name,
      message,
    } = this.state
    const { data } = this.props

    return (
      <React.Fragment>
        <CustomHelmet page='Kontakta ' />
        <Navbar />

        <Hero
          header="Kontakta oss"
          subHeader="När du vill komma i kontakt med oss kan ni antingen fylla i formuläret nedan eller nå oss via telefon. Vi är alltid beredda att diskutera dina behov och möjliga lösningar."
          bottomText="Kontakta oss"
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

        <Section id="contact-form" backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop dark header={`Låt oss skapa något grymt tillsammans.`}>
              Ring eller maila oss. Vi ser fram emot att få en ökad förståelse för dina behov och att tillsammans hitta innovativa lösningar.
            </SectionTop>
            <ContactUsWrapper>
              <PhoneContainer>
                <Card>
                  <SubHeader dark>Ring oss</SubHeader>
                  <CallUsContent>
                    <CenterContainer>
                      <FaPhone
                        style={{ fontSize: 30, color: colors.dark }}
                      />
                    </CenterContainer>
                    <CenterContainer>
                      <Anchor
                        style={{ marginLeft: 10 }}
                        href="tel:+46737303797"
                      >
                        +46737303797
                      </Anchor>
                    </CenterContainer>
                  </CallUsContent>
                </Card>
              </PhoneContainer>
              <ContactContainer>
                <Card>
                  <SubHeader dark>Maila oss</SubHeader>
                  <CallUsContent>
                    <CenterContainer>
                      <FaEnvelope
                        style={{ fontSize: 30, color: colors.dark }}
                      />
                    </CenterContainer>
                    <CenterContainer>
                      <Anchor
                        style={{ marginLeft: 10 }}
                        href="mailto:contact@innotactsoftware.com"
                      >
                        contact@innotactsoftware.com
                      </Anchor>
                    </CenterContainer>
                  </CallUsContent>
                </Card>
              </ContactContainer>
            </ContactUsWrapper>
          </ContentWrapper>
        </Section>

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
