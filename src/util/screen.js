import styles from '../styles/styles'
 
function isMobile(screenWidth) {
    return screenWidth <= styles.breakpoints.sm
} 

export default isMobile
