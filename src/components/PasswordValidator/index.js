import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Paragraph,
  WarningMsg,
  Password,
  Heading,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const isValid = password.length >= 8

  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Password
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {isValid ? null : (
          <WarningMsg>Your password must be at least 8 characters</WarningMsg>
        )}
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
