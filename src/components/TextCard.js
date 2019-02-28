import React, {Fragment} from 'react'
import styled from 'styled-components'
import SubHeader from './SubHeader';
import Text from './Text';
import colors from '../styles/colors'
import ColorFadeSection from './ColorFadeSection';
import CenterContainer from './CenterContainer';

const Container = styled.div`
    padding: 2rem 3.3rem 0.5rem 3.3rem;
    position: relative;
    background-color: ${colors.white};
    width: 740px;
    margin-top: 65px;
    box-shadow: ${colors.normalBoxShadow};
`
const Number = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 35px;
    left: -20px;
    background-color: ${colors.white};
    color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${colors.normalBoxShadow};
`

export default ({header, text, number, ...props}) => 
<Container {...props}>
    <SubHeader dark text={header} />
    <Text dark>{text}</Text>
    {number && <Number>
        <React.Fragment>
                <Text style={{marginBottom: 4, fontSize: '1.3rem'}} dark>{number}</Text>
            <ColorFadeSection style={{position: 'absolute', bottom: 0, left: 0, right: 0}} />
        </React.Fragment>
        </Number>}
</Container>