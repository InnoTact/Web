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
import { FaMobileAlt } from "react-icons/fa"

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

class Contact extends Component {
  state = {
    formFilled: false,
    name: "",
    email: "",
    message: "",
  }

  updateState = (type, event) => {
    const newState = { ...this.state }
    newState[type] = event.target.value

    if (newState.name && newState.email) {
      newState.formFilled = true
    } else {
      newState.formFilled = false
    }

    this.setState(newState)
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    navigateTo(form.getAttribute("action"))
  }

  render() {
    const { formFilled } = this.state

    return (
      <React.Fragment>
        <Navbar />

        <Hero>
          <ContentWrapper>
            <SectionTop
              light
              header="Contact Us"
              bottomText="Send us a message"
            >
              When you want to come in contact with us you can either fill in our form below or give us a call. We are always ready to discuss your needs and possible solutions. 
            </SectionTop>
          </ContentWrapper>
        </Hero>

        <Section id="contact-form" backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop dark header={`Let's Create Something Great.`}>
              Give us a call or fill the form so we can learn more about your
              needs.
            </SectionTop>
            <ContactUsWrapper>
              <ContactFormContainer>
                <Card>
                  <SubHeader dark>Fill Out the Form</SubHeader>
                  <form
                    onSubmit={this.handleSubmit}
                    action="/success/"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    style={{marginTop: -45}}
                  >
                    <ContactItem>
                      <ContactText dark>What's your name?*</ContactText>
                      <Input
                        placeholder="Full name"
                        required
                        type="text"
                        name="name"
                        onChange={event => this.updateState("name", event)}
                      />
                    </ContactItem>
                    <ContactItem>
                      <ContactText margi dark>
                        What email can we reach you at?*
                      </ContactText>
                      <Input
                        placeholder="robert@hotmail.com"
                        required
                        type="email"
                        name="email"
                        onChange={event => this.updateState("email", event)}
                      />
                    </ContactItem>
                    <ContactItem>
                      <ContactText dark>
                        Tell us more about your project or idea*
                      </ContactText>
                      <TextArea
                        as='textarea'
                        placeholder={`What do you want to build? What's your idea? What's the deadline?`}
                        name="message"
                        disabled={!formFilled}
                      />
                    </ContactItem>
                    <ContactItem
                      style={{ marginTop: "2rem", textAlign: "left" }}
                    >
                      <Button type="submit" disabled={!formFilled} primary>
                        Send my message
                      </Button>
                    </ContactItem>
                  </form>
                </Card>
              </ContactFormContainer>
              <CallContainer>
                <Card>
                  <SubHeader dark>Give Us a Call</SubHeader>
                  <CallUsContent>
                    <CenterContainer>
                      <FaMobileAlt style={{fontSize: 30, color: colors.primary}} />
                    </CenterContainer>
                    <CenterContainer>
                      <Anchor style={{marginLeft: 10}} href="tel:+46737303797">+46737303797</Anchor>
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

export default Contact
