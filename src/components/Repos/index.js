import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RepoCard from './RepoCard'

const ReposWrapper = styled.section`
  display:block;
  box-sizing: border-box;
  width: 90%
  margin: 20px auto;
  background: #f6f8ff;
  border: 1px solid #e1e6f6;
  border-radius: 10px;
`

const Repos = (props) => {
  const { repos, openIssues } = props

  const listOfRepos = repos.map(repo => {
    return <RepoCard key={repo.id} openIssues={openIssues} repo={repo}/>
  })

  return (
    <ReposWrapper>
      {listOfRepos}
    </ReposWrapper>
  )
}

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
}

Repos.defaultProps = {
  repos:[]
}

export default Repos