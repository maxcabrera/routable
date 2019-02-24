import styled from 'styled-components'

const Button = styled.button`
  display:block;
  border: none;
  box-sizing: border-box;
  flex-grow: 1;
  padding: 10px;
  background-color: #3056ba;
  color: #fff;
  height: 56px;
  line-height: 28px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  margin-top: 14px;
  border-radius: 8px;    
  box-shadow: 0 2px 6px rgba(77,92,113,.3); 
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 6px rgba(77,92,113,.3);
  }
`

export default Button