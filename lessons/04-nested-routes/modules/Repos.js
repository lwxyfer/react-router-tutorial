import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>Repos
        <h2>{this.props.params.name}</h2>
      </div>
    )
  }
})
