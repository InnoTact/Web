import styled from 'styled-components'

const ColorFadeSection = styled.div`
    width: 100%;
    background-image: linear-gradient(to right, #c31432, #240b36);
    height: ${props => props.height ? props.height : '4px'};
`

export default ColorFadeSection