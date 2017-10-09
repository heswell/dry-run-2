import React from 'react'
import './es6Component.css';

export default class Es6Component {
  constructor(){
    this.prop1 = 'test';
  }

  talk(){
    console.log('Hello')
  }
}

export class TestReactComponent extends React.Component {
  render(){
    const style = {width: 200, height: 400,beckgroundColor:'cyan'}
    return <div className='test' style={style}/>
  }
}

