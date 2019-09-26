import React from 'react'

import loading from './loading.gif'
import { blockStatement } from '@babel/types'

export default class Loading extends React.Component{

  style = { display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }

  render(){
    return <img src={loading} alt='Loading...' style={this.style}></img>
  }
}