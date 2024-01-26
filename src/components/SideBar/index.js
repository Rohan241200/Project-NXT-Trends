import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  MenuCard,
  MenuLink,
  SideMenuLinks,
  InfoCard,
  FollowUs,
  FollowUsOption,
  ContactUs,
  SocialMedia,
} from './styledComponent'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <SideBarContainer bgColor={theme}>
              <MenuCard>
                <Link to='/' className='sidebar-links'>
                  <SideMenuLinks active={theme}>
                    <MdHome />
                    <MenuLink active={theme}>Home</MenuLink>
                  </SideMenuLinks>
                </Link>
                <Link to='/trending' className='sidebar-links'>
                  <SideMenuLinks active={theme}>
                    <FaFire />
                    <MenuLink active={theme}>Trending</MenuLink>
                  </SideMenuLinks>
                </Link>
                <Link to='/gaming' className='sidebar-links'>
                  <SideMenuLinks active={theme}>
                    <SiYoutubegaming />
                    <MenuLink active={theme}>Gaming</MenuLink>
                  </SideMenuLinks>
                </Link>
                <Link to='/saved-videos' className='sidebar-links'>
                  <SideMenuLinks active={theme}>
                    <CgPlayListAdd />
                    <MenuLink active={theme}>Saved videos</MenuLink>
                  </SideMenuLinks>
                </Link>
              </MenuCard>
              <InfoCard>
                <ContactUs contact={theme}>CONTACT US</ContactUs>
                <FollowUs>
                  <FollowUsOption>
                    <SocialMedia
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
                      alt='facebook logo'
                    />
                  </FollowUsOption>
                  <FollowUsOption>
                    <SocialMedia
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
                      alt='twitter logo'
                    />
                  </FollowUsOption>
                  <FollowUsOption>
                    <SocialMedia
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
                      alt='linked in logo'
                    />
                  </FollowUsOption>
                </FollowUs>
                <ContactUs contact={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUs>
              </InfoCard>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SideBar
