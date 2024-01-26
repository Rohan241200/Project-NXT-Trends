import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${props => (props.bgColor ? '#313131' : '#ffffff')};
`

export const NavImg = styled.img`
  width: 85%;
  padding: 15px;
`

export const MobileView = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopView = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavListButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`

export const ThemeButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: ${props => (props.icon ? '#ffffff' : '#0f0f0f')};
`

export const MobileMenuPopupCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
`

export const MenuPopupCloseButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 26px;
  font-weight: bold;
  margin: 10px;
  color: ${props => (props.bgColor ? '#ffffff' : '#000000')};
`
export const MenuPopupCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`

export const SideMenuLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-bottom: 15px;
  padding-left: 20px;
  color: ${props => (props.active ? '#ffffff' : '#000000')};
`

export const MenuLink = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
  color: ${props => (props.active ? '#ffffff' : '#000000')};
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: ${props => (props.bgCard ? '#212121' : '#ffffff')};
  border: 2px solid ${props => (props.bgCard ? '#424242' : '#ebebeb')};
  border-radius: 20px;
  box-shadow: ${props =>
    props.bgCard ? '#212121' : '0px 0px 10px 0px #ffffff'};
`

export const LogoutButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  background-color: transparent;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  border: 2px solid ${props => (props.btnColor ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.btnColor ? '#ffffff' : '#3b82f6')};
`

export const LogoutAlertMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.desc ? '#ffffff' : '#212121')};
`
