import styles from '../styles/styles'

isMobile = (screenWidth) => {
    return screenWidth <= styles.breakpoints.sm
}

isTablet = (screenWidth) => {
    return screenWidth > styles.breakpoints.sm && screenWidth < styles.breakpoints.md
}

export { isMobile, isTablet }