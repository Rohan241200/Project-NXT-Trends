import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const SearchInputCard = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 5%;
  border: 1px solid ${props => (props.border ? '#424242' : '#cccccc')};
`

export const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  padding: 5px;
  color: ${props => (props.input ? '#f1f1f1' : '#231f20')};
`

export const SearchButton = styled.button`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: none;
  height: 100%;
  background-color: ${props => (props.search ? '#ebebeb' : '#7e858e')};
  color: ${props => (props.search ? '#231f20' : '#f1f1f1')};
`

export const UnorderItem = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`

export const NoSearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const NoSearchImg = styled.img`
  width: 60%;
`

export const NoSearchHeading = styled.h1`
  color: ${props => (props.heading ? '#ffffff' : '#000000')};
  font-size: 24px;
  font-weight: 500;
  font-family: Roboto;
`

export const NoSearchDesc = styled.p`
  color: ${props => (props.desc ? '#f8fafc' : '#0f0f0f')};
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
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

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
`
