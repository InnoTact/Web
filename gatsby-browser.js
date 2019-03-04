import React from 'react'
import './src/styles/global.css'
import RootWrapper from './src/components/RootWrapper';

export const wrapRootElement = ({ element }) => {
    return <RootWrapper>{element}</RootWrapper>
}