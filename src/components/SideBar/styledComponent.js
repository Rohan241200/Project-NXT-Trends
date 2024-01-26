import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#313131' : '#ffffff')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const FollowUs = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`

export const ContactUs = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
  color: ${props => (props.contact ? '#ffffff' : '#000000')};
`

export const FollowUsOption = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  margin: 8px;
  margin-bottom: 10px;
`

export const SocialMedia = styled.img`
  width: 90%;
`
