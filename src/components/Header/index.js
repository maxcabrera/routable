import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.section`
  padding: 1em;
  background: rgba(60,74,136,1);
  text-align: center;
  
  small,
  h1 {
    color: #fafbff;
  }
  
  h1 {
    padding: 0;
    margin: 0;
  }
`;

const Header = (props) => {
  const { title } = props
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <small>by Max Cabrera</small>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header. defaultProps = {
  title: 'Enter title for the header'
}

export default Header