import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  min-height: 100vh;
`

export const NotFoundImg = styled.img`
  width: 400px;
`

export const NotFoundHeading = styled.h1`
  font-size: 26px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.heading ? '#ffffff' : '#181818')};
`

export const NotFoundDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  color: ${props => (props.desc ? '#ffffff' : '#181818')};
`
