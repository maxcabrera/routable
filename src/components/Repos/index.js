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
  const { repos } = props

  const listOfRepos = repos.map(repo => {
    return <RepoCard key={repo.id} repo={repo}/>
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
  repos:[{
    id: 150074623,
    name: 'repo 1',
    full_name: 'maxcabrera/repo1',
    description: 'This is the description',
    open_issues_count: 5,
    html_url: 'https://github.com/creativetimofficial/argon-dashboard',
    owner: {
      login: 'creativetimofficial',
      avatar_url: 'https://avatars2.githubusercontent.com/u/38554814?v=4',
      type: 'Organization'
    },
  },
    {
      id: 15007323,
      name: 'repo 2',
      full_name: 'maxcabrera/repo2',
      description: 'This is the description',
      open_issues_count: 5,
      html_url: 'https://github.com/creativetimofficial/argon-dashboard',
      owner: {
        login: 'creativetimofficial',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20172349?v=4',
        type: 'Organization'
      },
    },
    {
      id: 15474623,
      name: 'repo 3',
      full_name: 'maxcabrera/repo3',
      description: 'This is the description',
      open_issues_count: 5,
      html_url: 'https://github.com/creativetimofficial/argon-dashboard',
      owner: {
        login: 'creativetimofficial',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20172349?v=4',
        type: 'Organization'
      },
    }]
}

export default Repos