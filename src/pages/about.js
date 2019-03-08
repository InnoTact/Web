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
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlobContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export default ({ data }) => (
  <React.Fragment>
    <Navbar />

    <Hero>
      <ContentWrapper>
        <SectionTop 
        light
        header='The Company' 
        text='Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse. Non ullamco amet esse anim tempor mollit fugiat duis. Pariatur nostrud occaecat eiusmod fugiat consequat esse.' 
        bottomText='Read More'
        />
      </ContentWrapper>
    </Hero>

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
        <Img alt="Team photo of Innotact Software" fluid={data.TeamImage.childImageSharp.fluid} />
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

    <People peopleImagesData={data} />
    <GetStarted />
    <Footer />
  </React.Fragment>
)

export const pageQuery = graphql`
  query {
    TeamImage: file(relativePath: {eq: "team.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    JoelImage: file(relativePath: {eq: "Joel_Rudsberg.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    NiklasImage: file(relativePath: {eq: "Niklas_Gustafsson.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    AntonImage: file(relativePath: {eq: "Anton_Claesson.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CasperImage: file(relativePath: {eq: "Casper_Lindberg.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    CarlImage: file(relativePath: {eq: "Carl_Claesson.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

