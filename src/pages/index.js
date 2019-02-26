import React, { Fragment } from 'react'
import { Header, Navbar, Section, CenterContainer } from '../components/'
import styled from 'styled-components'
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

const Hero = styled.div`
  background-image: linear-gradient(to right, #c31432, #240b36);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const StepsWrapper = styled.div`
  margin-left: 8%;
  position: relative;
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

    <Section backgroundColor={colors.white}>
        <ContentWrapper>
          <SectionTop dark header={`Let's get started`} text='Our team of highly skilled and motivated developers always strive towards perfection. While working with close relationships we make sure to meet every need of our customers while we develop Augmented Reality applications to change the way our customers work today. ' />
          <ServiceContainer>
            <ContentBlob heading='Bring your idea to life' 
            text='Do you already have an AR idea? Let us turn it into reality.'
            buttonText='Make it Real'
             />
            <ContentBlob heading='Let us create an idea together' 
            text='If you are not sure how use AR to improve your business we evaluate your opportunities and create an idea. '
            buttonText={`Let's do it`}
             />
          </ServiceContainer>
        </ContentWrapper>
    </Section>

    <Section backgroundColor={colors.lightgrey}>
      <ContentWrapper>
        <SectionTop dark header='The Team' text='Augmented Solutions AB (ASAB) consists of a team of high-performance and dedicated engineers from Chalmers University of Technology, located in Gothenburg, Sweden. Our number one priority is always customer satisfaction. We love to create ideas together with our customers to improve and simplify their businesses.' />
        <CenterContainer>
          <SubHeader style={{color: colors.dark, textAlign: 'center'}} text='Since Augmented Reality is a fast growing technology we make sure to stay updated on every single advance of the technology to stay on the cutting edge. Our goal is to become the most high performance Augmented Reality company in the country. ' /> 
        </CenterContainer>
        <PeopleContainer>
          <PeopleCard 
            name='Niklas Gustafsson' 
            position='CEO &amp; Developer'
            town='Göteborg, Sweden'
            text='Being the CEO of the company Niklas makes sure we will reach our goal of being the best AR company in the country. As an
              Industrial engineering student he is an expert in business strategy and marketing. He is responsible for contact with our
              customers and that our team is always feeling good. If there are any questions about our business or customers, Niklas is 
              the man to ask. '
            email='niklas@innotactsoftware.se'
            linkedin='https://www.linkedin.com/in/niklas-gustafsson-93025a12a/'
          />
          <PeopleCard 
            name='Joel Rudsberg' 
            position='Co-Founder &amp; Developer'
            town='Göteborg, Sweden'
            text='Since Joel is our project manager he is often in close contact with our customers. He is responsible for keeping our
            customers satisfied, which he seems to accomplish every single time. After a year of software engineering studies in the US
            Joel in now studying the same subject in Chalmers. If there are any questions about specific projects or our coding, Joel is
            the man to ask. '
            email='joel@innotactsoftware.se'
            linkedin='https://www.linkedin.com/in/joel-rudsberg/'
          />
          <PeopleCard 
            name='Anton Claesson' 
            position='Co-Founder &amp; Developer'
            town='Mölnlycke, Sweden'
            text={`Anton's artistic mind makes him the perfect man to be responsible for our design and users experience. Anton makes
            sure our products always are aesthetic and easy to use. Anton is now studying  ... If there are any questions about the user 
            experience or visuals of our products, Anton is the man to ask. `}
            email='anton@innotactsoftware.se'
            linkedin='https://www.linkedin.com/in/anton-claesson/'
          />
          <PeopleCard 
            name='Casper Lindberg' 
            position='Co-Founder, CTO &amp; Developer'
            town='Göteborg, Sweden'
            text='As our CTO Casper is in charge of our work structure. Besides being a very skilled programmer Casper has an impressive
            ability to find the right resources for the right task. As a best-in-class electrical engineer Casper is better than anyone 
            at adapting to and learning new technologies. If there are any questions about new technologies or our work structure, Casper
            is the man to ask.'
            email='casper@innotactsoftware.se'
            linkedin='https://www.linkedin.com/in/casperlindberg1997/'
          />
          <PeopleCard 
            name='Carl Claesson' 
            position='Co-Founder, CFO &amp; Developer'
            town='Mölnlycke, Sweden'
            text='Besides being our CFO Carl provides a lot of structure to the company. As a physics student Carl knows the importance of
            hard work and dedication. He makes sure all of us stays on top of our game at every given moment. If there are any questions 
            about our financials or work scheduling, Carl is the man to ask. '
            email='carl@innotactsoftware.se'
            linkedin='https://www.linkedin.com/in/carl-claesson-29145a16a/'
          />
         </PeopleContainer>
      </ContentWrapper>
    </Section>

    <Section backgroundColor={colors.white}>
        <ContentWrapper>
          <SectionTop dark header={`How we bring your product to life`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. In ut malesuada quam. Nulla facilisi. Etiam et erat ultricies, bibendum nunc nec, elementum ex. Phasellus fringilla mi in libero mattis, a gravida massa pharetra. Nunc facilisis pulvinar mauris, scelerisque ornare metus egestas ac.' />
          <StepsWrapper>
            <TextCard 
            header='Lets arrange for a meeting.' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'1'}
            dark
            />
            <TextCard 
            header='We create an action plan depending on your needs' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'2'}
            dark
            />
            <TextCard 
            header='While maintaining close contact we start executing the action plan' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'3'}
            dark
            />
            <TextCard 
            header='We keep on working on the solution until all your needs are met' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'4'}
            dark
            />
            <TextCard 
            header='We finish and lunch the solution' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'5'}
            dark
            />
            <TextCard 
            header='Continuous improvements for your future needs' 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            number={'6'}
            dark
            />
          </StepsWrapper>
        </ContentWrapper>
    </Section>

    <Section backgroundColor={colors.lightgrey}>
        <ContentWrapper>
          <SectionTop dark header={`Ready to Get Started?`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          <CenterContainer>
            <Button style={{marginTop: 25}} primary>Start a project</Button>
          </CenterContainer>
        </ContentWrapper>
    </Section>

    <Footer />
  </React.Fragment>
)
