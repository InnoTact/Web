import React from 'react'
import { Navbar, Section } from '../components'
import styled from 'styled-components'
import SectionTop from '../components/SectionTop'
import ContentWrapper from '../components/ContentWrapper'
import colors from '../styles/colors'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Text from '../components/Text';

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
        header='Capabilities' 
        text='Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse. Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse.' 
        bottomText='Learn More'
        />
      </ContentWrapper>
    </Hero>

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <SectionTop
            dark
            header={`Experts At Our Craft`} 
            text='Id tempor ullamco cupidatat cillum eiusmod. Labore aliquip laboris enim incididunt laboris ad velit.' 
            />
        </ContentWrapper>
    </Section>

    <Footer />
  </React.Fragment>
)
