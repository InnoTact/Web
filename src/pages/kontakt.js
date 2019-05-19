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
import { FaMobileAlt, FaCheck, FaTimes } from "react-icons/fa"
import { graphql } from "gatsby"
import BackgroundImage from "../components/BackgroundImage"

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

const CallContainer = styled.div`
  width: 30%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    order: 1;
    width: 100%;
    margin-bottom: 4rem;
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

const ContactFormContainer = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    width: 100%;
    order: 2;
  }
`

const ContactItem = styled.div`
  margin-top: 3rem;
`

const Input = styled.input`
  padding: 1.3rem 2rem;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  color: ${colors.darkgrey};
  background-color: ${colors.white};
  width: 100%;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 0.8rem 1.2rem;
  }
`

const TextArea = styled(Input)`
  min-height: 140px;
  line-height: 1.55;
`

const ContactText = styled(Text)`
  font-size: 1rem;
  margin-bottom: 0.35rem;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 0.95rem;
  }
`

const Status = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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

  getBorderColor = (text, validCheck) => {
    let borderColor
    if (text === "") {
      borderColor = colors.mediumGrey
    } else if (validCheck) {
      borderColor = colors.green
    } else {
      borderColor = colors.red
    }
    return borderColor
  }

  render() {
    const {
      formFilled,
      emailValid,
      email,
      nameValid,
      name,
      message,
    } = this.state
    const { data } = this.props

    let emailBorderColor, nameBorderColor, messageBorderColor
    emailBorderColor = this.getBorderColor(email, emailValid)
    nameBorderColor = this.getBorderColor(name, nameValid)
    messageBorderColor = this.getBorderColor(message, true)
    console.log(message)

    return (
      <React.Fragment>
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
              Ring oss eller fyll i formuläret så att vi får en större
              förståelse för dina behov.
            </SectionTop>
            <ContactUsWrapper>
              <ContactFormContainer>
                <Card>
                  <SubHeader dark>Fyll i formuläret</SubHeader>
                  <form
                    name="contact" 
                    method="post" 
                    action="/success" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    style={{ marginTop: -45 }}
                  >
                    <input type="hidden" name="bot-field" />
                    <ContactItem>
                      <ContactText dark>Vad heter du?*</ContactText>
                      <div style={{ position: "relative" }}>
                        <Input
                          style={{ borderColor: nameBorderColor }}
                          placeholder="Ditt namn"
                          required
                          type="text"
                          name="name"
                          onChange={event => this.updateState("name", event)}
                        />
                        <Status>
                          <FaCheck
                            style={{fontSize: 14, color: colors.green, display: colors.green == nameBorderColor ? 'block' : 'none'}} />
                        </Status>
                        <Status>
                          <FaTimes
                            style={{fontSize: 14, color: colors.red, display: colors.red == nameBorderColor ? 'block' : 'none'}} />
                        </Status>
                      </div>
                    </ContactItem>
                    <ContactItem>
                      <ContactText margi dark>
                        Vad är din email-address?*
                      </ContactText>
                      <div style={{position: 'relative'}}>
                      <Input
                        style={{ borderColor: emailBorderColor }}
                        placeholder="dinmail@gmail.com"
                        required
                        type="email"
                        name="email"
                        onChange={event => this.updateState("email", event)}
                      />
                      <Status>
                          <FaCheck
                            style={{fontSize: 14, color: colors.green, display: colors.green == emailBorderColor ? 'block' : 'none'}} />
                        </Status>
                        <Status>
                          <FaTimes
                            style={{fontSize: 14, color: colors.red, display: colors.red == emailBorderColor ? 'block' : 'none'}} />
                        </Status>
                      </div>
                    </ContactItem>
                    <ContactItem>
                      <ContactText dark>Berätta om din idé</ContactText>
                      <TextArea
                        style={{ borderColor: messageBorderColor }}
                        as="textarea"
                        placeholder={`Vad vill du skapa? Vad är din idé? När ska det vara klart?`}
                        name="message"
                        onChange={event => this.updateState("message", event)}
                      />
                    </ContactItem>
                    <ContactItem
                      style={{ marginTop: "2rem", textAlign: "left" }}
                    >
                      <Button type="submit" disabled={!formFilled} primary>
                        Skicka
                      </Button>
                    </ContactItem>
                  </form>
                </Card>
              </ContactFormContainer>
              <CallContainer>
                <Card>
                  <SubHeader dark>Ring oss</SubHeader>
                  <CallUsContent>
                    <CenterContainer>
                      <FaMobileAlt
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
              </CallContainer>
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
