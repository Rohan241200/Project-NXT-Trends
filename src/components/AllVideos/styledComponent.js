import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 44%;
  margin-bottom: 20px;
  margin-left: 15px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ListItemImg = styled.img`
  width: 100%;
`

export const ListContext = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`

export const ProfileItem = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
`

export const DescItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItem = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto;
  margin-top: 0px;
  margin-bottom: 5px;
  color: ${props => (props.profiletitle ? '#f8fafc' : '#000000')};
`
export const ProfileDesc = styled(ProfileTitle)`
  color: ${props => (props.desc ? '#f8fafc' : '#64748b')};
  margin-top: 5px;
`
