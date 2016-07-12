import React, {Component} from 'react'
import {Box, ComingSoon} from '../common-adapters'

export default class PeopleRender extends Component {
  _renderComingSoon () {
    return <ComingSoon />
  }

  render () {
    if (this.props.showComingSoon) {
      return this._renderComingSoon()
    }

    return (
      <Box>
        <p> People goes here </p>
        <p> Count: 0</p>
        <p> I mean, it’s one banana, Michael. What could it cost? Ten dollars? </p>
      </Box>
    )
  }
}
