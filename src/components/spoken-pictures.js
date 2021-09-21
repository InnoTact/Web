import React from 'react'
import styled, { css } from "styled-components"

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

export default function SpokenPicturesComponent() {
    return (
        <Container>
            <h1>Spoken Pictures</h1>
            <p>Press the link you recieved on your email using your iPhone or iPad to sign in!</p>
        </Container>
    )
}
