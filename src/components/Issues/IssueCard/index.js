import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IssueCardWrapper = styled.section`
  display:flex;
  box-sizing: border-box;
  flex-direction: row;
  border-bottom: 3px solid #f6f8ff;
  padding: 16px 0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .position-tool {
    box-sizing: border-box;
    width:20%
    max-width: 50px;
    background: #C7DDFF;
    padding:4px;
    border-radius:10px;
  }
  
  .repo-avatar {
    width:12%;
    
    span { 
      background: #C7DDFF;
      padding:10px;
      border-radius:30%;
      margin-top: 0;
      display: block;
    }
    
    img {
      width: 40px;
      border-radius: 10px;
      margin-top: 5px;
    }
  }
 
  
  .repo-info {
    flex-grow:2;
    padding-left: 10px;
    text-align: left;
    h1 {
      margin:0 0 5px 0;
      text-transform: capitalize;
      font-size: 1rem;
    }
    small {
      display: block;
    }
  }
`

const IssueCard = (props) => {
  const { issue, moveUp, moveDown } = props

  let createdAt = issue.created_at
  let updatedAt = issue.updated_at

  return (
    <IssueCardWrapper>
      <div className="repo-avatar">
        <span>{issue.rank}</span>
        {issue.assignee
        && <img src={issue.assignee.avatar_url} />}
      </div>
      <div className="repo-info">
        <h1>{issue.title}</h1>
        <small>Created: {createdAt}</small>
        <small>Last update: {updatedAt}</small>
        {!issue.assignee && <small>Issue not assigned</small>}
      </div>
      <div className="position-tool">
        <div onClick={(e) => {
          e.preventDefault()
          moveUp(issue.id)
        }}>⬆️️</div>️
        <div onClick={(e) => {
          e.preventDefault()
          moveDown(issue.id)
        }}>⬇️</div>
      </div>
    </IssueCardWrapper>
  )
}

IssueCard.protTypes = {
  moveUp: PropTypes.func,
  moveDown: PropTypes.func,
  issue: PropTypes.shape({
    id: PropTypes.number,
    rank: PropTypes.number,
    html_url: PropTypes.string,
    number: PropTypes.number,
    title: PropTypes.string,
    state: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    body: PropTypes.string,
    closed_at: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    assignee: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
        url: PropTypes.string,
      }),
    ]),
  }).isRequired
}

export default IssueCard