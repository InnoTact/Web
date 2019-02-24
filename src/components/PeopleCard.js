import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import Text from './Text'
import { graphql } from "gatsby"
import Casper_Lindberg from '../img/Casper_Lindberg.jpg'
import Joel_Rudsberg from '../img/Joel_Rudsberg.jpg'
import Anton_Claesson from '../img/Anton_Claesson.jpg'
import Niklas_Gustafsson from '../img/Niklas_Gustafsson.jpg'
import Carl_Claesson from '../img/Carl_Claesson.jpg'
import { FaMapMarker, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Container = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    width: 380px;
    margin-right: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
`

const Image = styled.img`
    width: 180px;
    border-radius: 50%;
`

const Name = styled.h5`
    font-size: 1.3rem;
    font-weight: bold;
    margin: 15px 0 0 0;
    padding: 0;
`

const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`

const Position = styled.p`
    font-style: italic;
    color: ${colors.darkgrey};
    margin-top: 0.8rem;
`

const LogosContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SocialLogo = styled.a`
    color: ${colors.primary};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6px;
    margin-left: 6px;
`

export default ({name, position, town, text, email, linkedin}) => {
    let src
    switch(name) {
        case 'Anton Claesson':
            src = Anton_Claesson;
            break;
        case 'Carl Claesson':
            src = Carl_Claesson;
            break;
        case 'Casper Lindberg':
            src = Casper_Lindberg;
            break;
        case 'Niklas Gustafsson':
            src = Niklas_Gustafsson;
            break;
        case 'Joel Rudsberg':
            src = Joel_Rudsberg;
            break;
    }

    return (
        <Container>
        <Image src={src} alt={name} />
        <Name>{name}</Name>
        <Position>{position}</Position>
        <LocationContainer>
            <FaMapMarker style={{fontSize: '1rem', marginRight: 12, color: colors.primary}} />
            <Text style={{margin: 0}} dark>{town}</Text>
        </LocationContainer>
        <Text style={{textAlign: 'center'}} dark>{text}</Text>
        <LogosContainer>
            <SocialLogo>
                <FaEnvelope style={{fontSize: 25, color: colors.primary}} />
            </SocialLogo>
            <SocialLogo>
                <FaLinkedin style={{fontSize: 25, color: colors.primary}} />
            </SocialLogo>
        </LogosContainer>
    </Container>
    )
}
    

