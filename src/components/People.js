import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper';
import SectionTop from './SectionTop';
import CenterContainer from './CenterContainer';
import SubHeader from './SubHeader';
import PeopleCard from './PeopleCard';
import Section from './Section';
import colors from '../styles/colors'

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export default () => 
<Section backgroundColor={colors.white}>
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
        sure our products always are aesthetic and easy to use. Anton is now studying automation and mechatronics. If there are any questions about the user 
        experience or visuals of our products, Anton is the man to ask. `}
        email='anton@innotactsoftware.se'
        linkedin='https://www.linkedin.com/in/anton-claesson/'
        />
        <PeopleCard 
        name='Casper Lindberg' 
        position='Co-Founder, CTO &amp; Developer'
        town='Göteborg, Sweden'
        text='Being the CTO of the company, Casper is charge of our technical strategy. As a skilled programmer and Electrical engineering student, Casper is
        an expert at adapting to and learning new technologies. To make sure that the right tools and technologies are used efficienctly in our company, Casper
        is in responsible of our work structure. If there are any questions about new technologies or our work structure, Casper is the man to ask.'
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