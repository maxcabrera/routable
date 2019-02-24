import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RepoTitleWrapper  = styled.section`
  
  h1 {
    text-align: left;
    padding-left: 10px
  }
  
  .back-button {
    display: inline-block;
    box-sizing: border-box;
    padding-top: 3px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    height: 30px;
    width: 30px;
    border-radius:50%;
    background: #3056ba;
    margin-right: 10px;
    text-decoration: none;
  }
  
  .back-button:hover {
    cursor: pointer;
  }

`


const RepoTitle = (props) => {
  const { title, clearRepoSelection } = props

  const clearSelection = (e)=> {
    e.preventDefault()
    clearRepoSelection()
  }

  return (
    <RepoTitleWrapper>
      <h1>
        {clearRepoSelection && <a
          className='back-button'
          onClick={clearSelection}
          href="#clearselection"
        >&#8592;</a>}
         {title}</h1>
    </RepoTitleWrapper>
  )
}

RepoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  clearRepoSelection: PropTypes.func,
}

RepoTitle.defaultProps = {
  title: 'Missing title'
}

export default RepoTitle