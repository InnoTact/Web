import React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import colors from '../styles/colors'

const TimelineWrapper = styled.div`
  width: 100px;
  margin: 60px auto;
  position: absolute;
  top: 60px;
  right: 200px;
`

const TimelineUl = styled.ul`
  counter-reset: step;
`

const TimelineItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  :first-child {
      top: -30px;
  }
  
  :not(:first-child) {
      margin-top: 180px;
  }

  ::before {
    content: '';
    width: 60px;
    height: 60px;
    counter-increment: step;
    border: 2px solid ${colors.primary};
    display: block;
    text-align: center;
    border-radius: 50%;
    background-color: ${colors.white};
  };
`

const IconStyle = {
    fontSize: '3rem',    
}

export default ({...props}) => 
<TimelineWrapper>
    <TimelineUl>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
        <TimelineItem>
            <FaCube style={IconStyle} />
        </TimelineItem>
    </TimelineUl>
</TimelineWrapper> 