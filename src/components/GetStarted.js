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
    <SectionTop dark header={`Redo för att sätta igång?`}>Vi är här för att hjälpa dig. Klicka på knappen nedan för att nå oss. Tillsammans gör vi din idé till verklighet.</SectionTop>
    <CenterContainer>
        <Link to='/kontakt/#contact-form'>
            <Button style={{marginTop: 25}} primary>Starta projekt</Button>
        </Link>
    </CenterContainer>
    </ContentWrapper>
</Section>