import React from "react"
import { Navbar, Section } from "../components/"
import styled from "styled-components"
import SectionTop from "./../components/SectionTop"
import ContentWrapper from "./../components/ContentWrapper"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Image = styled.img`
  max-width: 100%;
  margin: 10px auto 0;
`

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default () => (
  <React.Fragment>
    <Navbar />

    <Hero>
      <ContentWrapper>
        <SectionTop
          light
          header="Possibilites ahead!"
          text="We will get back to you soon... bla bla"
        />
      </ContentWrapper>
    </Hero>

    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop
          dark
          header={`Lorem ipsum dolor`}
          text="Id tempor ullamco cupidatat cillum eiusmod. Labore aliquip laboris enim incididunt laboris ad velit. Consequat sit nulla consectetur amet enim commodo cillum nulla Lorem qui magna."
        />
      </ContentWrapper>
    </Section>

    <Footer />
  </React.Fragment>
)
