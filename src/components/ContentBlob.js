import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FaObjectGroup } from 'react-icons/fa'
import colors from '../styles/colors'
import SubHeading from './SubHeading'
import Text from './Text'
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  margin: 2rem auto 0 auto;
  text-align: center;
`

const Item = styled.div`
  text-align: center;
`

export default ({ children, heading, text, buttonText }) => (
  <Wrapper>
    <Item>
      <FaObjectGroup style={{ fontSize: '5rem', color: colors.dark, position: 'relative', bottom: -30 }} />
    </Item>
    <Item>
      <SubHeading dark text={heading} />
    </Item>
    <Item>
      <Text dark>{text}</Text>
    </Item>
    <Item>
      <Button primary>{buttonText}</Button>
    </Item>
  </Wrapper>
)
