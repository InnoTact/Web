import React, { Component } from "react"
import styles from "../styles/styles"

export const AppContext = React.createContext({
  screenWidth: '',
  screenHeight: '',
  isMobile: '',
  isTablet: ''
})

class RootWrapper extends Component {
  static contextType = AppContext

  constructor() {
    super()
    const isMobile = this.isMobile()
    const isTablet = this.isTablet()
    this.state = {
      context: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile,
        isTablet,
      },
    }
  }

  componentDidMount = () => {
    this.onWindowResize()
    window.addEventListener("resize", () => {
      this.onWindowResize()
    })
  }

  onWindowResize = () => {
    let isMobile = this.isMobile()
    let isTablet = this.isTablet()
    this.setState({
      ...this.state,
      context: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile,
        isTablet,
      },
    })
  }

  isMobile = () => {
    return window.innerWidth < styles.breakpoints.sm
  }

  isTablet = () => {
    return (
      window.innerWidth > styles.breakpoints.sm &&
      window.innerHeight < styles.breakpoints.md
    )
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize")
  }

  render() {
    const { children } = this.props

    return (
      <AppContext.Provider value={this.state.context}>
        {children}
      </AppContext.Provider>
    )
  }
}

export default RootWrapper
