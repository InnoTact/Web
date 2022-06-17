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
    gap: 32px;
    margin-top: 2rem;
  `
    const CardTitle = styled.h4`
    
  `

    const standardFeatures = [
        new Feature("AR Rendering Engine", true),
        new Feature("Measurement tool", true),
        new Feature("Seamless web integration", true),
        new Feature("Maintenance & updates", true),
        new Feature("10,000 user sessions per month", true)
    ]
    const premiumFeatures = [
        new Feature("AR Rendering Engine", true),
        new Feature("Measurement tool", true),
        new Feature("Seamless web integration", true),
        new Feature("Maintenance & updates", true),
        new Feature("Unlimited user sessions", true),
        new Feature("Customized branding (colors, fonts, texts)", true),
        new Feature("Data analytics package", true),
        new Feature("Checkout and cart integration to website", true),
    ]
    const appFeatures = [
        new Feature("AR Rendering Engine", true),
        new Feature("Measurement tool", true),
        new Feature("Seamless web integration", true),
        new Feature("Maintenance & updates", true),
        new Feature("Unlimited user sessions", true),
        new Feature("Android & iOS apps in your name", true),
        new Feature("Fully custom brand design", true),
        new Feature("Filter, search, and sort all your wallpapers", true),
        new Feature("Data analytics", true),
        new Feature("Checkout and cart integration to website", true),
        new Feature("Powerful features like push notifications", true),
        new Feature("Custom feature requests", true)
    ]

    return (
        <Section backgroundColor={light ? colors.white : colors.lightgrey}>
            <ContentWrapper maxWidth={'1440px'}>
                <SectionTop dark header={"Plans and Pricing"}>
                    Help your customers make faster decisions, increase conversion, and reduce returns with the Wallpaper Visualizer. Even if you're a industry leader, a smaller company, or simply want to try it out, we got you covered.
                </SectionTop>
                <MainContainer>
                    <PlanCard
                        title={'Standard – 1 month free trial'}
                        color={colors.gray}
                        description={'Our newest offer is the the perfect way to get started with the Wallpaper Visualizer. It gives the full power of the AR wallpaper visualizer, seamless integration with your website, and you are live within days. Simply add your wallpapers in the admin interface to get started or integrate with a simple API.'}
                        price={'€499'}
                        priceDescription={'/ month after 1 month free trial'}
                        features={standardFeatures}
                    />
                    <PlanCard
                        title={'Premium'}
                        color={colors.primaryHighLighten}
                        description={'Perfect for mid-size or large businesses wanting to expand upon the Standard plan by getting a customized part of the platform with your branding and feel. Also get unlimited users, data analytics to guide business decisions, and ability to drive sales further with a checkout integration to your website.'}
                        price={'€999'}
                        priceDescription={'/ month'}
                        features={premiumFeatures}
                    />
                    <PlanCard
                        title={'Custom Apps'}
                        color={colors.primary}
                        description={'With an iOS and Android app in your company name with AR wallpaper visualizer technology, you will revolutionize your customer experience. It will boost your marketing, increase sales, and has the ability to transform your business. We will custom-tailor the apps to your brand and unique requirements to help you reach your goals.'}
                        price={'Custom Pricing'}
                        priceDescription={''}
                        features={appFeatures}
                    />
                </MainContainer>
            </ContentWrapper>
        </Section>
    )
}

function PlanCard({ color, title, description, price, priceDescription, features }) {
    const Price = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.dark};
    display: inline-block;
    margin-bottom: 0;
  `
    const PriceDescription = styled.span`
    font-size: 0.9rem;
    color: ${colors.normalText};
  `
    const PlanCard = styled.div`
    padding: 2rem 3.3rem 2rem 3.3rem;
    position: relative;
    background-color: white;
    box-shadow: ${colors.normalBoxShadow};
    max-width: 440px;

    @media (max-width: ${styles.breakpoints.sm + "px"}) {
    padding: 1rem 1.65rem;
    }
`
    const Description = styled(Text)`
        color: ${colors.normalText};
        min-height: 290px;

        @media (max-width: ${styles.breakpoints.lg + "px"}) {
            min-height: 0;
        }
    `

    return (
        <PlanCard>
            <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }}></span>
            <SubHeader style={{ display: 'block', fontSize: '1.40rem', fontWeight: 550, marginBottom: '1rem' }} dark>{title}</SubHeader>
            {/* <Text dark center style={{ color: colors.normalText, minHeight: 290 }}>{description}</Text> */}
            <Description dark center>{description}</Description>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <Price>{price}</Price>
                <PriceDescription>{priceDescription}</PriceDescription>
            </div>
            {features.map(f => {
                return (<div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    {f.isIncluded ? <FaCheck style={{ color: colors.green, fontSize: 16, minWidth: 16 }}></FaCheck> : <FaBan style={{ color: colors.red }}></FaBan>}
                    <Text style={{ marginBottom: 0, marginLeft: 12, fontSize: '0.95rem', color: colors.normalText, textAlign: 'left' }} dark center>{f.feature}</Text>
                </div>)
            })}
        </PlanCard>)
}