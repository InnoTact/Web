import React, { Component } from 'react'

export const AppContext = React.createContext({
    width: window.innerHeight,
    height: window.innerHeight
});

class RootWrapper extends Component {
    constructor() {
        super()
        this.state = {
            context: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize')
    }

  render() {
    const { children } = this.props
    const { context } = this.state

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
  }
}

export default RootWrapper
