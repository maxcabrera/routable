import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IssueCard from './IssueCard'

const IssuesWrapper = styled.section`
  display:block;
  box-sizing: border-box;
  width: 90%
  margin: 20px auto;
  border-radius: 10px;
`

const Issues = (props) => {
  const { issues, moveDown, moveUp } = props

  const listOfIssues = issues.map((issue, index) => {
    return <IssueCard
      key={issue.id}
      position={index + 1}
      issue={issue}
      moveUp={moveUp}
      moveDown={moveDown}
    />
  })

  return (
    <IssuesWrapper>
      {listOfIssues}
    </IssuesWrapper>
  )
}

Issues.propTypes = {
  moveUp: PropTypes.func,
  moveDown: PropTypes.func,
  issues: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
}

Issues.defaultProps = {
  issues:[
    {
      id: 402860529,
      rank: 1,
      title: 'Can\'t find stylesheet to import.',
      created_at: '2018-10-01T04:17:21Z',
      updated_at: '2018-10-01T04:17:21Z',
      assignee: {
        login: "extrabright",
        id: 38554814,
        avatar_url: "https://avatars2.githubusercontent.com/u/38554814?v=4",
        html_url: "https://github.com/extrabright",
      },
    },
    {
      id: 40286039,
      rank: 2,
      title: 'App not starting',
      created_at: '2018-10-01T04:17:21Z',
      updated_at: '2018-10-01T04:17:21Z',
      assignee: {
        login: "extrabright",
        id: 38554814,
        avatar_url: "https://avatars2.githubusercontent.com/u/38554814?v=4",
        html_url: "https://github.com/extrabright",
      },
    }
    ]
}

export default Issues