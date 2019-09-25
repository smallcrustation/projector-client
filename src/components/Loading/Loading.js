import React from 'react'

import loading from './loading.gif'

export default class Loading extends React.Component{
  render(){
    return <img src={loading} alt='Loading...'></img>
  }
}