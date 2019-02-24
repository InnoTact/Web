import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FaObjectGroup } from 'react-icons/fa'
import colors from '../styles/colors'
import SubHeading from './SubHeading'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Item = styled.div`
  text-align: center;
  margin-top: 2rem;
`

export default ({ children }) => (
  <Wrapper>
    <Item>
      <FaObjectGroup style={{ fontSize: '5rem', color: colors.dark }} />
    </Item>
    <Item>
      <SubHeading text='Bring your idea to life' />
    </Item>
    <Item />
  </Wrapper>
)
