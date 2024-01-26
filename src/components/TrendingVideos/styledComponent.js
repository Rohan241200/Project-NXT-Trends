import styled from 'styled-components'

export const TrendingList = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const TrendingTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  margin: 0px;
  color: ${props => (props.heading ? '#f8fafc' : '#000000')};

  @media screen and (min-width: 992px) {
    font-size: 22px;
  }
`

export const TrendingDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  margin-bottom: 5px;
  color: ${props => (props.desc ? '#94a3b8' : '#424242')};
`
