import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    const {first} = this.state
    this.setState(prevStart => {
      if (prevStart.first === true) {
        return {first: false}
      }
      return {first: true}
    })
  }
  lastName = () => {
    const {last} = this.state
    this.setState(prevStart => {
      if (prevStart.last === true) {
        return {last: false}
      }
      return {last: true}
    })
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="name-container">
            <button className="btn-name" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first ? <p className="card">Joe</p> : null}
          </div>
          <div>
            <button className="btn-name" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last ? <p className="card">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
