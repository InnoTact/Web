import React, {Fragment} from 'react'
import { Navbar, Section } from '../components'
import styled from 'styled-components'
import SectionTop from '../components/SectionTop'
import ContentWrapper from '../components/ContentWrapper'
import colors from '../styles/colors'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Text from '../components/Text';
import arkit from '../img/arkit.png'
import arcore from '../img/arcore.png'
import unity from '../img/unity.png'
import VR from '../img/VR.jpg'
import Mobile from '../img/mobile.jpg'
import Development from '../img/development.jpg'
import ContentBlob from '../components/ContentBlob';
import Capability from '../components/Capability';
import GetStarted from '../components/GetStarted';

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const logoImageSize = 70;

const Icon = styled.div`
  width: ${logoImageSize + 'px'};
  height: ${logoImageSize + 'px'};
`

const Image = styled.img`
  width: ${logoImageSize + 'px'};
  height: ${logoImageSize + 'px'};
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

    <Section style={{marginBottom: 0, paddingBottom: 0}} backgroundColor={colors.white}>
      <React.Fragment>
          <ContentWrapper>
            <SectionTop
              dark
              header={`Experts At Our Craft`} 
              text='Förklarande text som svarar på tviveln kring att vi är nya och inte har erfarenhet.' 
              />
          </ContentWrapper>
          <Capability buttonText='Build the Future' style={{marginTop: 60}} textLeft header='Augmented Reality' text='Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
              anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
              duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
              irure sit eiusmod.'>
                <img src={VR} />
          </Capability>
          <Capability buttonText='Get Started' header='Mobile App Development' text='Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
              anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
              duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
              irure sit eiusmod.'>
                <img src={Mobile} />
          </Capability>
          <Capability buttonText='Contact Us' textLeft header='Websites &amp; Web Apps' text='Culpa labore tempor sint excepteur esse non enim elit eu veniam. Exercitation incididunt incididunt nostrud irure
              anim nostrud do Lorem amet. Ullamco voluptate ea ullamco cupidatat. Adipisicing sint reprehenderit qui mollit aliqua ut aute Lorem excepteur esse labore. Elit id cillum
              duis aliqua laborum nulla nulla aute Lorem irure deserunt consectetur dolore. Adipisicing ad voluptate deserunt consequat officia laboris irure dolore dolor ut commodo 
              irure sit eiusmod.'>
                <img src={Development} />
          </Capability>
        </React.Fragment>
    </Section>

    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop
          dark
          header='Technology Capabilities'
          text='Förklara vilka superheta teknoligier vi använder. Att vi alltid ligger i framkant. Fördelarn det ger för kund. Esse commodo veniam id officia. Aliqua incididunt voluptate in labore id ad magna
          proident enim nostrud ex. Anim et excepteur nulla culpa enim.'
          />
      </ContentWrapper>
    </Section>

    <GetStarted />

    <Footer />
  </React.Fragment>
)
