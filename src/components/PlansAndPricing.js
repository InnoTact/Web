import React from "react"
import SectionTop from "./SectionTop"
import Section from "./Section"
import ContentWrapper from "./ContentWrapper"
import colors from "../styles/colors"
import styled from "styled-components"
import Text from "./Text"
import ContentBlobWrapper from "./ContentBlobWrapper"
import SubHeading from "./SubHeading"
import SubHeader from "./SubHeader"
import styles from '../styles/styles'
import { FaCheck, FaBan } from "react-icons/fa"

class Feature {
    constructor(feature, isIncluded) {
        this.feature = feature
        this.isIncluded = isIncluded
    }
}

export default function PlansAndPricing({ light }) {
    const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2rem;
  `
    const CardTitle = styled.h4`
    
  `

    const platformFeatures = [
        new Feature("AR Rendering Engine", true),
        new Feature("Measurement tool", true),
        new Feature("Favorites list and comparions", true),
        new Feature("Custom brand design", false),
        new Feature("Custom iOS and Android app", false),
    ]
    const appFeatures = [
        new Feature("AR Rendering Engine", true),
        new Feature("Measurement tool", true),
        new Feature("Favorites list and comparions", true),
        new Feature("Custom brand design", true),
        new Feature("Custom iOS and Android app", true),
    ]

    return (
        <Section backgroundColor={light ? colors.white : colors.lightgrey}>
            <ContentWrapper>
                <SectionTop dark header={"Plans and Pricing"}>
                    Choose between two options: the starter solution or the premium package. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SectionTop>
                <MainContainer>
                    <PlanCard 
                        title={'Starter'}
                        isMainDeal={false}
                        description={'Brief overview of what this is. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'}
                        price={'€499'}
                        priceDescription={'/ month after free trial'}
                        features={platformFeatures}
                    />
                    <PlanCard 
                        title={'Custom Apps'}
                        isMainDeal={true}
                        description={'Brief overview of what this is. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'}
                        price={'Custom Pricing'}
                        priceDescription={''}
                        features={appFeatures}
                    />
                </MainContainer>
            </ContentWrapper>
        </Section>
    )
}

function PlanCard({ isMainDeal, title, description, price, priceDescription, features }) {
    const Price = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.dark};
    display: inline-block;
  `
    const PriceDescription = styled.span`
    font-size: 1rem;
    color: ${colors.gray};
  `
    const PlanCard = styled.div`
    padding: 2rem 3.3rem 2rem 3.3rem;
    position: relative;
    background-color: ${isMainDeal};
    box-shadow: ${colors.normalBoxShadow};
    max-width: 450px;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 1rem 1.65rem;
    }
`

    return (<PlanCard>
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: isMainDeal ? colors.primary : colors.gray }}></span>
        <SubHeader style={{ display: 'block', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }} dark>{title}</SubHeader>
        <Text dark center>{description}</Text>
        <div style={{ textAlign: 'center' }}>
            <Price>{price}</Price>
            <PriceDescription>{priceDescription}</PriceDescription>
        </div>
        {features.map(f => {
            return (<div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                {f.isIncluded ? <FaCheck style={{ color: colors.green }}></FaCheck> : <FaBan style={{ color: colors.red }}></FaBan>}
                <Text style={{ marginBottom: 0, marginLeft: 12, fontSize: '1rem' }} dark center>{f.feature}</Text>
            </div>)
        })}
    </PlanCard>)
}