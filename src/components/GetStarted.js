import React from 'react'
import SectionTop from './../components/SectionTop'
import ContentWrapper from './../components/ContentWrapper'
import Section from './../components/Section'
import CenterContainer from './../components/CenterContainer'
import colors from '../styles/colors'
import Button from '../components/Button';


export default () => 
<Section backgroundColor={colors.white}>
    <ContentWrapper>
    <SectionTop dark header={`Ready to Get Started?`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem ipsum, egestas a maximus ac, varius id nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
    <CenterContainer>
        <Button style={{marginTop: 25}} primary>Start a project</Button>
    </CenterContainer>
    </ContentWrapper>
</Section>