import React from 'react'
import styled from 'styled-components'
import Section from './Section';
import colors from '../styles/colors'
import Logo from './Logo';
import NavItems from './NavItems';
import Text from './Text'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ContentWrapper from './ContentWrapper';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Item = styled.div`
    display: inline-block;
    position: relative;
`

const Anchor = styled(Text)`
    :hover {
        color: ${colors.primary};
    }
`

const SocialLogos = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
`

const SocialLogoAnchor = styled.a`
    :hover {
        color: ${colors.primary};
    }
`

const socialLogoStyle = {
    fontSize: 16,
    marginLeft: 5,
    color: colors.white
}

export default () => 
<Section style={{padding: '3rem 3rem'}} backgroundColor={colors.darkgrey}>
    <ContentWrapper>
        <Container>
            <Item>
                <Logo light />
            </Item>
            <Item>
                <NavItems light />    
            </Item>
            <Item style={{minWidth: 300}}>
                <Text small borderBottom light>Gothenburg, Sweden</Text>
                <div style={{position: 'relative'}}>
                    <div style={{marginBottom: 6}}>
                        <Text style={{display: 'inline'}} small light>p: <Anchor style={{display: 'inline'}} small light href="tel:+46737303797">+46737303797</Anchor></Text>
                    </div>
                    <Text small light style={{display: 'inline'}}>e: <Anchor style={{display: 'inline'}} small light href="mailto:niklas@innotactsoftware.com">niklas@innotactsoftware.com</Anchor></Text>
                    <SocialLogos>
                        <SocialLogoAnchor href="https://github.com/">
                            <FaGithub style={socialLogoStyle} />
                        </SocialLogoAnchor>
                        <SocialLogoAnchor href="https://www.linkedin.com/company/innotact-software-ab/about/">
                            <FaLinkedin style={socialLogoStyle} />
                        </SocialLogoAnchor>
                        <SocialLogoAnchor href="mailto:niklas@innotactsoftware.com">
                            <FaEnvelope style={socialLogoStyle} />
                        </SocialLogoAnchor>
                    </SocialLogos>
                </div>
            </Item>
        </Container>
    </ContentWrapper>
</Section>