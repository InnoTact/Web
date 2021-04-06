import styled from 'styled-components'

const ColorFadeSection = styled.div`
    width: 100%;
    background: #216198; /* linear-gradient(to right, rgba(255,154,0,0.85), rgba(255,77,0,0.85)); */  /* rgb(255,116,0) */
    height: ${props => props.height ? props.height : '4px'};
`

export default ColorFadeSection