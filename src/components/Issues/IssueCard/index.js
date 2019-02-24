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
  
  
  
  .repo-avatar {
    width: 44px;
    box-sizing: border-box;
    
    span { 
      box-sizing: border-box;
      background: rgba(60,74,136,1);
      height:30px;
      width:30px;
      padding-top: 5px;
      border-radius:50%;
      display: block;
      color: #fff;
      margin: 5px auto 0 auto;
    }
    
    img {
      width: 40px;
      margin-left: 5px;
      margin-top: 5px;
    }
  }
 
  
  .repo-info {
    width:100%
    padding-left: 10px;
    text-align: left;
    h1 {
      margin:0 0 5px 0;
      text-transform: capitalize;
      font-size: 1rem;
    }
    small {
      display: block;
      margin-bottom:3px;
    }
  }
  
  .position-tool {
    box-sizing: border-box;
    width: 60px;
    padding:4px;
    border-radius:10px;
  }
  
  .triangle-up {
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 36px solid #3056ba;
  }
  
  .triangle-down:hover,
  .triangle-up:hover {
    cursor: pointer
  }
    
  .triangle-down {
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 36px solid #3056ba;
  } 
  
  @media (min-width: 960px) {
    .triangle-up {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 20px solid #3056ba;
    }
    
    .triangle-down {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 20px solid #3056ba;
    }
    
    .repo-avatar {
      span {
        margin-top: 0;
      }
    }
    
  }
  
   
`

const IssueCard = (props) => {
  const { issue, moveUp, moveDown, position } = props

  let createdAt = issue.created_at
  let updatedAt = issue.updated_at

  return (
    <IssueCardWrapper>
      <div className="repo-avatar">
        <span>{position}</span>
        {issue.assignee
        && <img src={issue.assignee.avatar_url} alt={`Issue assigned to ${issue.assignee.login}`} />}
      </div>
      <div className="repo-info">
        <h1>{issue.title}</h1>
        <small>Created: {createdAt}</small>
        <small>Last update: {updatedAt}</small>
        {!issue.assignee && <small>Issue not assigned</small>}
        {issue.assignee && <small>Issue assigned to <a href={issue.assignee.html_url} target="_blank" rel="noopener noreferrer">{issue.assignee.login}</a> </small>}
      </div>
      <div className="position-tool">
        <div className="triangle-up"
          onClick={(e) => {
            e.preventDefault()
            moveUp(issue)
        }}></div>️
        <div className="triangle-down"
          onClick={(e) => {
            e.preventDefault()
            moveDown(issue)
        }}></div>️
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
        html_url: PropTypes.string,
      }),
    ]),
  }).isRequired
}

export default IssueCard