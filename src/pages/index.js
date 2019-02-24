import React, { Fragment } from 'react'
import { Header, Navbar, Section, CenterContainer } from '../components/'
import styled from 'styled-components'
import SubHeader from './../components/SubHeader'
import SectionTop from './../components/SectionTop'
import ContentWrapper from './../components/ContentWrapper'
import ContentBlob from './../components/ContentBlob'

const Hero = styled.div`
  background-image: linear-gradient(to right, #c31432, #240b36);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <React.Fragment>
    <Navbar />

    <Hero>
      <ContentWrapper>
        <SectionTop 
        light
        header='We are experts in Augmented Reality' 
        text='Together we will take your business to the next level by developing innovative augmented reality experiences.' 
        buttonText='Start a project' />
      </ContentWrapper>
    </Hero>

    <Section>
        <ContentWrapper>
          <SectionTop dark header={`Let's get started`} text='Our team of highly skilled and motivated developers always strive towards perfection. While working with close relationships we make sure to meet every need of our customers while we develop Augmented Reality applications to change the way our customers work today. ' buttonText='' />
          <ContentBlob />
        </ContentWrapper>
    </Section>

    <Section>
    <ContentWrapper>
      <Header>About Us</Header>
      </ContentWrapper>
    </Section>

    <Section>
      <Header>Previous Work</Header>
    </Section>

    <Section>
      <Header>How we bring your product to life</Header>
    </Section>

    <Section>
      <Header>Testimony</Header>
    </Section>

    <Section>
      <Header>Blogg</Header>
    </Section>
  </React.Fragment>
)
