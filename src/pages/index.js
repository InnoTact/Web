import React, { Fragment } from 'react'
import { Header, Navbar, Section } from '../components/'

export default () => (
  <React.Fragment>
    <Navbar />

    <div style={{ backgroundColor: 'orange', height: '100px' }} />

    <Section>
      <Header>
        We are pioneers. We will take your business to next level by developing innovative augmented reality
        experiences.
      </Header>
    </Section>

    <Section>
      <Header>Services</Header>
    </Section>

    <Section>
      <Header>About Us</Header>
    </Section>

    <Section>
      <Header>Previous Work</Header>
    </Section>

    <Section>
      <Header>How we bring your product to life</Header>
    </Section>

    <Section>
      <Header>Testimony</Header>
    </Section>

    <Section>
      <Header>Blogg</Header>
    </Section>
  </React.Fragment>
)
