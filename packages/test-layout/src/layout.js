import React from 'react'

export default class Layout extends React.Component {
  render(){
    return (
      React.createElement('div', {
        className:'Layout',
        style:{
          width: 600,height:400,padding: 20,backgroundColor:'yellow'
        }
      }, this.props.children)
    )
  }
}