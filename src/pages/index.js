import React, { Fragment } from 'react'
import { Header, Navbar, Section, CenterContainer } from '../components/'
import styled from 'styled-components'
import styles from '../styles/styles'
import SubHeader from './../components/SubHeader'
import SectionTop from './../components/SectionTop'
import ContentWrapper from './../components/ContentWrapper'
import ContentBlob from './../components/ContentBlob'
import colors from '../styles/colors'
import PeopleCard from '../components/PeopleCard';
import TextCard from '../components/TextCard';
import Progress from '../components/Progress';
import Button from '../components/Button';
import Footer from '../components/Footer';
import People from '../components/People'
import Hero from '../components/Hero';
import GetStarted from '../components/GetStarted'
import { FaCubes } from 'react-icons/fa'

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StepsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <SectionTop dark header={`Let's get started`} text='Our team of highly skilled and motivated developers always strive towards perfection. While working with close relationships we make sure to meet every need of our customers while we develop Augmented Reality applications to change the way our customers work today. ' />
          <ServiceContainer>
            <ContentBlob heading='Bring your idea to life' 
            text='Do you already have an AR idea? Let us turn it into reality.'
            buttonText='Make it Real'
             >
              <FaCubes style={styles.icon} />
             </ContentBlob>
            <ContentBlob heading='Let us create an idea together' 
            text='If you are not sure how use AR to improve your business we evaluate your opportunities and create an idea. '
            buttonText={`Let's do it`}
             >
              <FaCubes style={styles.icon} />
             </ContentBlob>
          </ServiceContainer>
        </ContentWrapper>
    </Section>

    <People />

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <SectionTop dark header={`How we bring your product to life`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. In ut malesuada quam. Nulla facilisi. Etiam et erat ultricies, bibendum nunc nec, elementum ex. Phasellus fringilla mi in libero mattis, a gravida massa pharetra. Nunc facilisis pulvinar mauris, scelerisque ornare metus egestas ac.' />
          <StepsWrapper>
            <TextCard 
            style={{marginTop: 40}}
            header='Lets arrange for a meeting.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'1'}
            dark
            />
            <TextCard 
            header='We create an action plan depending on your needs.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'2'}
            dark
            />
            <TextCard 
            header='While maintaining close contact we start executing the action plan.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'3'}
            dark
            />
            <TextCard 
            header='We keep on working on the solution until all your needs are met.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'4'}
            dark
            />
            <TextCard 
            header='We finish and lunch the solution.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'5'}
            dark
            />
            <TextCard 
            header='Continuous improvements for your future needs.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'6'}
            dark
            />
          </StepsWrapper>
        </ContentWrapper>
    </Section>

    <GetStarted />

    <Footer />
  </React.Fragment>
)
