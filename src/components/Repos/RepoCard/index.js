import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ReporCardWrapper = styled.section`
  display:flex;
  box-sizing: border-box;
  flex-direction: row;
  border-bottom: 3px solid white;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    cursor: pointer;
    background-color: #C7DDFF;
  }
  
  img {
    width: 100%;
  }
  
  .repo-avatar {
    flex-basis: 20%;
  }
  
  .repo-info {
    padding-left: 10px;
    text-align: left;
    h1 {
      margin-top: 10px;
      margin-bottom: 0;
      text-transform: capitalize;
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
    <ReporCardWrapper onClick={openRepoIssues}>
      <div className="repo-avatar">
        <img src={repo.owner.avatar_url} />
      </div>
      <div className="repo-info">
        <h1>{repo.name}</h1>
        {repo.open_issues_count > 0
        && <small>{repo.open_issues_count} open issues</small>}
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