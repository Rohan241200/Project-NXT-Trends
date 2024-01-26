import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon, FaFire} from 'react-icons/fa'
import {IoMdClose, IoMdMenu} from 'react-icons/io'
import {MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'
import {
  NavBar,
  MobileView,
  DesktopView,
  NavImg,
  ThemeButton,
  NavListButton,
  MobileMenuPopupCard,
  MenuPopupCloseButton,
  MenuPopupCardList,
  SideMenuLinks,
  MenuLink,
  ProfileImg,
  LogoutButton,
  LogoutContainer,
  LogoutAlertMessage,
} from './styledComponent'
import './index.css'

const Header = props => {
  const {history} = props
  const confirmLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, changeTheme} = value

        const themeChange = () => {
          changeTheme()
        }

        const headerImg = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavBar bgColor={theme}>
            <Link to="/" className="nxt-watch-link">
              <NavImg src={headerImg} alt="website logo" />
            </Link>
            <MobileView>
              <NavListButton>
                <ThemeButton
                  type="button"
                  onClick={themeChange}
                  data-testid="theme"
                  icon={theme}
                >
                  {theme ? <FiSun /> : <FaMoon />}
                </ThemeButton>
              </NavListButton>
              <NavListButton>
                <Popup
                  modal
                  trigger={
                    <ThemeButton type="button" aria-label="menu" icon={theme}>
                      <IoMdMenu />
                    </ThemeButton>
                  }
                >
                  {close => (
                    <MobileMenuPopupCard bgColor={theme}>
                      <MenuPopupCloseButton
                        type="button"
                        aria-label="close button"
                        onClick={() => close()}
                        bgColor={theme}
                      >
                        <IoMdClose />
                      </MenuPopupCloseButton>
                      <MenuPopupCardList>
                        <Link to="/" className="sidebar-links">
                          <SideMenuLinks active={theme}>
                            <MdHome />
                            <MenuLink active={theme}>Home</MenuLink>
                          </SideMenuLinks>
                        </Link>
                        <Link to="/trending" className="sidebar-links">
                          <SideMenuLinks active={theme}>
                            <FaFire />
                            <MenuLink active={theme}>Trending</MenuLink>
                          </SideMenuLinks>
                        </Link>
                        <Link to="/gaming" className="sidebar-links">
                          <SideMenuLinks active={theme}>
                            <SiYoutubegaming />
                            <MenuLink active={theme}>Gaming</MenuLink>
                          </SideMenuLinks>
                        </Link>
                        <Link to="/saved-videos" className="sidebar-links">
                          <SideMenuLinks active={theme}>
                            <CgPlayListAdd />
                            <MenuLink active={theme}>Saved videos</MenuLink>
                          </SideMenuLinks>
                        </Link>
                      </MenuPopupCardList>
                    </MobileMenuPopupCard>
                  )}
                </Popup>
              </NavListButton>

              <NavListButton>
                <Popup
                  modal
                  trigger={
                    <ThemeButton
                      type="button"
                      onClick={confirmLogout}
                      icon={theme}
                    >
                      <FiLogOut />
                    </ThemeButton>
                  }
                >
                  {close => (
                    <LogoutContainer bgCard={theme}>
                      <LogoutAlertMessage desc={theme}>
                        Are you sure, you want to logout?
                      </LogoutAlertMessage>
                      <div className="logout-button-card">
                        <button
                          type="button"
                          className="cancel button"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="confirm button"
                          onClick={confirmLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </LogoutContainer>
                  )}
                </Popup>
              </NavListButton>
            </MobileView>

            <DesktopView>
              <NavListButton>
                <ThemeButton
                  icon={theme}
                  type="button"
                  onClick={themeChange}
                  data-testid="theme"
                >
                  {theme ? <FiSun /> : <FaMoon />}
                </ThemeButton>
              </NavListButton>
              <NavListButton>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile-img"
                />
              </NavListButton>

              <NavListButton>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" btnColor={theme}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <LogoutContainer bgCard={theme}>
                      <LogoutAlertMessage desc={theme}>
                        Are you sure, you want to logout?
                      </LogoutAlertMessage>
                      <div className="logout-button-card">
                        <button
                          type="button"
                          className="cancel button"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="confirm button"
                          onClick={confirmLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </LogoutContainer>
                  )}
                </Popup>
              </NavListButton>
            </DesktopView>
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
