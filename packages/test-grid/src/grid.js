import React from 'react'
import {DataSource} from 'test-data'

export default class Grid extends React.Component {
  render(){
    const {data} = new DataSource();
    const children = data.map(val => React.createElement('div',{style:{padding:5}},val));
    return React.createElement('div', {
      className: 'Grid',
      style: {width: 300,height:200,backgroundColor:'green'}
    }, children)
  }
}