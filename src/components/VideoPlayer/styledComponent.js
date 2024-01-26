import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoPlayCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export const VideoPlayerTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.heading ? '#ffffff' : '#000000')};
`

export const VideoPlayerDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.desc ? '#d7dfe9' : '#606060')};
  margin-left: 10px;
`

export const VideoPlayerDescription = styled(VideoPlayerDesc)`
  font-weight: bold;
  @media screen and (min-width: 768px) {
    margin-left: 10%;
  }
`

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 5px;
  color: ${props => (props.btn ? '#2563eb' : '#64748b')};
`

export const OnFailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
`

export const OnFailureImage = styled.img`
  width: 80%;
`

export const OnFailureHeading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: Roboto;
  color: ${props => (props.heading ? '#ffffff' : '#000000')};
`

export const OnFailureDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.desc ? '#e2e8f0' : '#64748b')};
`

export const OnFailureButton = styled.button`
  background-color: #4f46e5;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  border: none;
  cursor: pointer;
  outline: none;
`
