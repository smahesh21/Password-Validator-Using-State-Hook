import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SubContainer = styled.div`
  height: 50%;
  width: 50%;
  background-color: #475569;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`
export const Password = styled.input`
  padding-left: 10px;
  background-color: #edeeff;
  border-radius: 5px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const WarningMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ef4444;
`
