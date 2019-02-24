import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'

const LoginWrapper = styled.section`

  input {
    background-color: transparent;
    color: #4d5c71;
    font-size: 14px;
    padding: 10px 14px;
    border: 1px solid #d3dcf4;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 6px;
    text-align: center;
  }
  
  button {
    max-width: 50%;
    margin: 20px auto;
  }
`


const LoginForm = (props) => {
  const { sendToken, tokenValue, updateInput } = props
  return (
    <LoginWrapper>
      <h1>Welcome</h1>
      <p>Enter github token</p>
      <input
        value={tokenValue}
        onChange={updateInput}
        type="text" name="token" />
      <Button onClick={
        (e) => {
          e.preventDefault()
          sendToken()
        }
      }>Send token</Button>
    </LoginWrapper>
  )
}

LoginForm.propTypes = {
  sendToken: PropTypes.func.isRequired,
  tokenValue: PropTypes.string,
  updateInput: PropTypes.func,
}

LoginForm.defaultProps = {
  sendToken: () => { },
  updateInput: () => {},
  tokenValue: '',
}

export default LoginForm