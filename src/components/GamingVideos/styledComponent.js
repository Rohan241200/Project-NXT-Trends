import styled from 'styled-components'

export const GamingList = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }

  @media screen and (min-width: 992px) {
    width: 18%;
  }
`

export const GamingTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto;
  color: ${props => (props.head ? '#ffffff' : '#000000')};
`

export const GamingDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  color: ${props => (props.desc ? '#d7dfe9' : '#000000')};
`
