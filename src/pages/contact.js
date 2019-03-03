import React from "react"
import { Navbar, Section } from "../components/"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Text from "../components/Text"

const ContactFormContainer = styled.div`
  width: 70%;
`

const ContactItem = styled.div`
  margin-top: 0;
`

const Input = styled.input`
  padding: 1.3rem 2rem;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 6px;
  color: ${colors.darkgrey};
  background-color: ${colors.white};
  width: 100%;
`

export default () => (
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
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <ContactItem>
                <Text dark>What's your name?*</Text>
                <Input placeholder='Full name' required type='text' name='name' />
              </ContactItem>
              <ContactItem>
                <Text dark>What email can we reach you at*</Text>
                <Input placeholder='info@innotactsoftware.se' required type='email' name='email' />
              </ContactItem>
              <ContactItem>
                <Text>Tell us more about your project or idea*</Text>
                <Input type='text' name='name' />
              </ContactItem>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </Card>
        </ContactFormContainer>
      </ContentWrapper>
    </Section>

    <Footer />
  </React.Fragment>
)
