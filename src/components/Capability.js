import React, {Fragment} from 'react'
import styled from 'styled-components'
import SubHeading from './SubHeading';
import Button from './Button';
import Text from './Text';
import {Link} from 'gatsby'

const Container = styled.div`
    position: relative;
`

const InfoContainer = styled.div`
    padding: 1rem 4rem 4rem 4rem;
    text-align: left;
    width: 50vw;
    margin-left: ${({textLeft}) => textLeft ? 0 : '50%'};
`

const ImageContainer = styled.div`
    position: absolute;
    right: ${props => props.textLeft ? 0 : '50%'};
    left: ${props => props.textLeft ? '50%' : 0};
    top: 0;
    bottom: 0;
    overflow: hidden;
`

export default ({textLeft, header, text, buttonText, children, ...props}) => {
    let info = 
    <InfoContainer textLeft={textLeft}>
        <SubHeading dark text={header} />
        <Text dark>{text}</Text> 
        <Link to='/contact/'>
            <Button primary>{buttonText}</Button>          
        </Link>
    </InfoContainer>

    let image =
    <ImageContainer textLeft={textLeft}>
        {children}
    </ImageContainer>


    return (
        <Container {...props}>
            <Fragment>
                {textLeft ? info : image}
                {!textLeft ? info : image}
            </Fragment>
        </Container>
    )
}
