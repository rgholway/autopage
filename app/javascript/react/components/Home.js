import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import logo from '../../../assets/images/logo.png'
import FormTile from './FormTile'
import background from '../../../assets/images/background.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
    this.addNewEmail = this.addNewEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addNewEmail(formPayload){
    let jsonStringInfo = JSON.stringify(formPayload)
      fetch(`/api/v1/emails`, {
        method: 'POST',
        body: jsonStringInfo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(formPayload => formPayload.json())
    }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      email: this.state.email
      }
    this.addNewEmail(formPayload)
    }

  handleChange(event) {
    this.setState({ email: event.target.value})
    }

  render() {
    console.log(this.state.email);
    return(
      <div>
        <img className="logo" src={logo} alt="autonova" />
        <img className="background" src={background} alt="highway" />
        <div className="lower"></div>
        <div className= "form">
          <div className= "form__title"> SUBSCRIBE FOR UPDATES </div>
          <form className = "player__rate--form" onSubmit={this.handleSubmit}>
            <FormTile
              content={"Email"}
              label= {`Email`}
              name="rating-score"
              handleChange= {this.handleChange}
              />
            <input className="button" type="submit" value="ADD EMAIL"/>
          </form>
        </div>
      </div>
    )}
  }

  export default Home
