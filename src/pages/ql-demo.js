import React from "react"
import CarlLarssonImage from '../img/art/carl_larsson.jpeg';
import MatisseImage from '../img/art/matisse.jpeg';
import FridaKahloImage from '../img/art/frida_kahlo.jpg';
import styled from "styled-components"

const USDZLink = styled.a`
    margin: 2rem;
    display: inline-block;
`

const Image = styled.img`
    width: 350px;
    max-height: 500px;
`
const QLDemo = () => {
    return <React.Fragment>
        <div>
            <USDZLink rel="ar" href="/3d/frida_kahlo.usdz">
                <Image src={FridaKahloImage} alt="Frida Kahlo" />
                <p>Frida Kahlo</p>
            </USDZLink>
            <USDZLink rel="ar" href="/3d/carl_larsson.usdz">
                <Image src={CarlLarssonImage} alt="Carl Larsson" />
                <p>Carl Larsson</p>
            </USDZLink>
            <USDZLink rel="ar" href="/3d/matisse.usdz">
                <Image src={MatisseImage} alt="Henri Matisse" />
                <p>Henri Matisse</p>
            </USDZLink>
        </div>
    </React.Fragment>
}

export default QLDemo