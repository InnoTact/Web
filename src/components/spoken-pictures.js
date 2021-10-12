import React from 'react'
import styled, { css } from "styled-components"
import useOpenAppLink from '../hooks/open-app-link'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*background-image: url("photographer.jpg");*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const IOS_APP_LINK = 'https://apps.apple.com/se/app/spoken-pictures/id1580367313';

export default function SpokenPicturesComponent() {
    useOpenAppLink({ios: IOS_APP_LINK});
    return (
        <Container>
            <h1>Spoken Pictures</h1>
            <a href={IOS_APP_LINK}>Install Spoken Pictures iOS App</a>
            <p>Android Coming soon!</p>
        </Container>
    )
}
