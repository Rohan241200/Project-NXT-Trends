import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Container,
  NotFoundCard,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value
      const notFoundImg = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <Container bgColor={theme}>
            <SideBar />
            <NotFoundCard>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading heading={theme}>Page Not Found</NotFoundHeading>
              <NotFoundDesc desc={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundCard>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
