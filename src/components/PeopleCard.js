import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import Text from './Text'
import Casper_Lindberg from '../img/Casper_Lindberg.jpg'
import Joel_Rudsberg from '../img/Joel_Rudsberg.jpg'
import Anton_Claesson from '../img/Anton_Claesson.jpg'
import Niklas_Gustafsson from '../img/Niklas_Gustafsson.jpg'
import Carl_Claesson from '../img/Carl_Claesson.jpg'
import { FaMapMarker, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import ColorFadeSection from './ColorFadeSection';

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
    position: relative;
    box-shadow: ${colors.normalBoxShadow};
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
    color: ${colors.dark};
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
    margin-bottom: 0.4rem;
`

const LogosContainer = styled.div`
    padding-top: 12px;
    margin-top: auto;
    margin-bottom: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SocialLogo = styled.a`
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 2px solid ${colors.primaryHighLighten};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;

    :hover {
        border-color: ${colors.primaryLowLighten};
        transition: all ease-in-out 0.2s;
    }
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
            <SocialLogo href={`mailto:${email}`}>
                <FaEnvelope style={{fontSize: 25, color: colors.primary}} />
            </SocialLogo>
            <SocialLogo href={linkedin}>
                <FaLinkedin style={{fontSize: 25, color: colors.primary}} />
            </SocialLogo>
        </LogosContainer>
        <ColorFadeSection style={{position: 'absolute', bottom: 0, left: 0, right: 0}} />
    </Container>
    )
}
    
