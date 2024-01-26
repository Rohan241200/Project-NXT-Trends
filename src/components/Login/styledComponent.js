import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#424242' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const BgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  padding: 20px;
  border-radius: 15px;
  box-shadow: ${props =>
    props.bgColor ? '#0f0f0f' : '0px 4px 14px 4px #ebebeb'};

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const FormLabel = styled.label`
  color: ${props => (props.desc ? '#ffffff' : '#0f0f0f')};
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  line-height: 1.7;
`

export const FormInput = styled.input`
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  color: ${props => (props.bgInput ? '#f8fafc' : '#0f0f0f')};
  border: 1px solid ${props => (props.bgInput ? '#475569' : '#0f0f0f')};
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;
`
