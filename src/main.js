import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import {
  add
} from './math'

console.log(add(1, 2))

class App extends Component {
  render() {
    return <div>Hello World!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))