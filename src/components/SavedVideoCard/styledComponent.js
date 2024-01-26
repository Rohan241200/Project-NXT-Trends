import styled from 'styled-components'

export const SavedList = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const SavedTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  margin: 0px;
  color: ${props => (props.heading ? '#f8fafc' : '#000000')};

  @media screen and (min-width: 992px) {
    font-size: 22px;
  }
`

export const SavedDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  margin-bottom: 5px;
  color: ${props => (props.desc ? '#94a3b8' : '#424242')};
`
