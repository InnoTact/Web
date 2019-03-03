import React, { Component } from "react"
import { Navbar, Section } from "../components/"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Text from "../components/Text"
import Button from "../components/Button"

const ContactFormContainer = styled.div`
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
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
`

const TextArea = styled.textarea`
  padding: 1.3rem 2rem;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  color: ${colors.darkgrey};
  background-color: ${colors.white};
  width: 100%;
  min-height: 140px;
`

const ContactText = styled(Text)`
  font-size: 1rem;
  margin-bottom: 0.35rem;
`

class Contact extends Component {
  state = {
    formFilled: false,
    name: "",
    email: "",
    message: "",
  }

  updateState = (type, event) => {
    const { name, email } = this.state
    const newState = { ...this.state }
    newState[type] = event.target.value

    if (newState.name && newState.email) {
      newState.formFilled = true
    } else {
      newState.formFilled = false
    }

    this.setState(newState)
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
              text="Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse. Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse."
              bottomText="Send us a message"
            />
          </ContentWrapper>
        </Hero>

        <Section backgroundColor={colors.lightgrey}>
          <ContentWrapper>
            <SectionTop
              dark
              header={`Let's Create Something Great.`}
              text="Id tempor ullamco cupidatat cillum eiusmod. Labore aliquip laboris enim incididunt laboris ad velit."
            />
            <ContactFormContainer>
              <Card>
                <form action='/success/' name="contact" method="POST" data-netlify="true">
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
                      placeholder="info@innotactsoftware.se"
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
                      placeholder="What do you want to build? What is your idea? What is the deadline?"
                      name="message"
                      disabled={!this.state.formFilled}
                    />
                  </ContactItem>
                  <ContactItem style={{ marginTop: "2rem", textAlign: "left" }}>
                    <Button type='submit' disabled={!this.state.formFilled} primary>
                      Send my message
                    </Button>
                  </ContactItem>
                </form>
              </Card>
            </ContactFormContainer>
          </ContentWrapper>
        </Section>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Contact
