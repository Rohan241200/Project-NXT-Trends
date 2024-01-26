import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`

export const SaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SaveHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: ${props => (props.bgHead ? '#212121' : '#ebebeb')};
`
export const SaveLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0b37;
  background-color: ${props => (props.logo ? '#000000' : '#cbd5e1')};
  padding: 20px;
  border-radius: 50%;
  font-size: 26px;
`
export const SaveMainHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Roboto;
  margin-left: 15px;
  color: ${props => (props.mainHeading ? '#ffffff' : '#000000')};
`

export const NoSavedHeading = styled.h1`
  font-size: 20px;
  font-weight: 400;
  font-family: Roboto;
  color: ${props => (props.heading ? '#ffffff' : '#000000')};
`

export const NoSavedDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  color: ${props => (props.desc ? '#ffffff' : '#000000')};
`
