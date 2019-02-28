import React from 'react'
import { Navbar, Section, CenterContainer } from '../components/'
import styled from 'styled-components'
import SectionTop from './../components/SectionTop'
import ContentWrapper from './../components/ContentWrapper'
import ContentBlob from './../components/ContentBlob'
import colors from '../styles/colors'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import team from '../img/team.jpg'
import { FaCubes } from 'react-icons/fa'
import styles from '../styles/styles'
import People from '../components/People';
import GetStarted from '../components/GetStarted';

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
        header='The Company' 
        text='Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse. Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse.' 
        readMore
        />
      </ContentWrapper>
    </Hero>

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <Image src={team} alt="Team photo" />
          <BlobContainer>
            <ContentBlob heading='Trait i teamet 1' 
            text='Ullamco dolore labore fugiat sit qui. Tempor amet ullamco laborum ullamco elit est cillum ullamco anim ut. Occaecat culpa sint esse ea tempor irure eu eiusmod.'
             >
              <FaCubes style={styles.icon} />
             </ContentBlob>
            <ContentBlob heading='Trait i teamet 2' 
            text='Ullamco dolore labore fugiat sit qui. Tempor amet ullamco laborum ullamco elit est cillum ullamco anim ut. Occaecat culpa sint esse ea tempor irure eu eiusmod.'
             >
              <FaCubes style={styles.icon} />
             </ContentBlob>
             <ContentBlob heading='Trait i teamet 3' 
            text='Ullamco dolore labore fugiat sit qui. Tempor amet ullamco laborum ullamco elit est cillum ullamco anim ut. Occaecat culpa sint esse ea tempor irure eu eiusmod.'
             >
              <FaCubes style={styles.icon} />
             </ContentBlob>
          </BlobContainer>
        </ContentWrapper>
    </Section>

    <People />
    <GetStarted />
    <Footer />
  </React.Fragment>
)
