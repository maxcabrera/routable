import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BreadWrapper = styled.section`
  margin: 0;
  padding: 10px;
  text-align:left;
  
  span {
    font-size:12px;
    margin-right: 8px;
    text-align: left;
  }
  
  span:after {
    content: ' >';
  }
  
  span:last-child:after {
    content: ''
  }
`

const BreadCrumbs = (props) => {
  const { paths } = props

  let breadCrumbs = paths.map((element, index) => {
    return <span key={index}>{element.title}</span>
  })

  return (
    <BreadWrapper className="bread">
      {breadCrumbs}
    </BreadWrapper>
  )
}

BreadCrumbs.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired
}

BreadCrumbs.defaultProptypes = {
  paths:[{title: 'Home'}]
}

export default BreadCrumbs