import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import FormTile from './FormTile'
import facebook from '../../../assets/images/fb.png'
import instagram from '../../../assets/images/ig.png'

class Second extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      active: "first"
    }
    this.addNewEmail = this.addNewEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFirstClick = this.handleFirstClick.bind(this)
    this.handleSecondClick = this.handleSecondClick.bind(this)
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

  handleFirstClick() {
    this.setState({ active: "first" })
  }

  handleSecondClick() {
    this.setState({ active: "second" })
  }

  render() {
    return(
      <div className="cover--second">
        <a href='https://www.facebook.com/Autonova-102904924468564/' className="facebook">
          <img src={facebook} alt="facebook"/>
        </a>
        <a href='https://www.instagram.com/autonoova/' className="instagram">
          <img src={instagram} alt="instagram"/>
        </a>
        <div className= {`form__active`}>
          <div className="form__title--second"> SUBSCRIBE FOR UPDATES </div>
          <form className = {`email--form`} onSubmit={this.handleSubmit}>
            <FormTile
            content={"Email"}
            label= {`Email`}
            email={this.state.email}
            name="rating-score"
            handleChange= {this.handleChange}
            />
            <input className="submit--email--second" type="submit" value="Subscribe"/>
          </form>
        </div>
        <div className="line"></div>
      </div>
    )}
  }

  export default Second
