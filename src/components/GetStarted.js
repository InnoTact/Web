import React from 'react'
import SectionTop from './../components/SectionTop'
import ContentWrapper from './../components/ContentWrapper'
import Section from './../components/Section'
import CenterContainer from './../components/CenterContainer'
import colors from '../styles/colors'
import Button from '../components/Button';
import { Link } from 'gatsby'

export default () => 
<Section backgroundColor={colors.white}>
    <ContentWrapper>
    <SectionTop dark header={`Ready to Get Started?`}>We are here to help you. Press the button below to get in contact with us.<br/>Together we will make your ideas come true.</SectionTop>
    <CenterContainer>
        <Link to='/contact/#contact-form'>
            <Button style={{marginTop: 25}} primary>Start a project</Button>
        </Link>
    </CenterContainer>
    </ContentWrapper>
</Section>