import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../Button'

const ReporCardWrapper = styled.section`
  display:flex;
  align-content: flex-start;
  box-sizing: border-box;
  flex-direction: row;
  border-bottom: 3px solid white;
  height: 80px;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #C7DDFF;
  }
  
  
  
  .repo-avatar {
    width: 60px;
    box-sizing: border-box;
    
    img {
      width: 40px;
      margin-left: 5px;
      margin-top: 16px;
    }
  }
  
  .repo-info {
    padding-left: 10px;
    text-align: left;
    width:100%;
    h1 {
      margin-top: 12px;
      margin-bottom: 0;
      text-transform: capitalize;
    }
  }
  
  .repo-go {
    width:80px;
    padding-right:5px;
    
    button {
      margin:5px 5px 0 0;
      //height: 40px;
      padding: 0;
      
    }
  }
`

const ReporCard = (props) => {
  const { repo, openIssues } = props

  const openRepoIssues = function(e) {
    e.preventDefault()
    openIssues(repo)

  }
  return (
    <ReporCardWrapper>
      <div className="repo-avatar">
        <img src={repo.owner.avatar_url} />
      </div>
      <div className="repo-info">
        <h1>{repo.name}</h1>
        {repo.open_issues_count > 0
        && <small>{repo.open_issues_count} open issues</small>}
      </div>
      <div className="repo-go">
        <Button onClick={openRepoIssues} >Go ></Button>
      </div>
    </ReporCardWrapper>
  )
}

ReporCard.protTypes = {
  openIssues: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    full_name: PropTypes.string,
    description: PropTypes.string,
    open_issues_count: PropTypes.number,
    html_url: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired
}

export default ReporCard