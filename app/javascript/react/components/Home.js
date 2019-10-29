import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import logo from '../../../assets/images/logo.png'
import FormTile from './FormTile'
import background from '../../../assets/images/dark.jpg'
import bottom from '../../../assets/images/lower.jpg'
import flag from '../../../assets/images/flag.png'
import car from '../../../assets/images/car.png'
import facebook from '../../../assets/images/fb.png'
import instagram from '../../../assets/images/ig.png'

class Home extends Component {
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
    this.handleFacebook = this.handleFacebook.bind(this)
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

  handleFacebook() {
  }

  render() {
    return(
      <div>
        <a href='https://www.facebook.com/Autonova-102904924468564/' className="facebook">
          <img src={facebook} alt="facebook"/>
        </a>
        <a href='https://www.instagram.com/autonoova/' className="instagram">
          <img src={instagram} alt="instagram"/>
        </a>
        <img className="logo" src={logo} alt="autonova" />
        <img className="background" src={background} alt="highway" />
        <img className="bottom" src={bottom} alt="mountain_sunset" />
        <div className="cover">
          <div className={`info`} onClick={this.handleFirstClick}>About Us</div>
          <div className={`form--button`} onClick={this.handleSecondClick}>Subscribe</div>
        </div>
        <div className="words">Racing To Launch</div>
        <div className="words--under"> We are very excited to be launching AutoNova in the near future! Subscribe, and check in for updates </div>
        <div className= {`form--${this.state.active}`}>
          <div className="form__title"> SUBSCRIBE FOR UPDATES </div>
          <form className = {`email--form`} onSubmit={this.handleSubmit}>
            <FormTile
            content={"Email"}
            label= {`Email`}
            email={this.state.email}
            name="rating-score"
            handleChange= {this.handleChange}
            />
            <input className="submit--email" type="submit" value="Subscribe"/>
          </form>
        </div>
        <div className={`information--${this.state.active}`}>
          <div className="information--box">
            <img className="title--box--second" src={car} alt="sports car" />
            <div className="paragraph"> AutoNova will be the preeminent place to sell and buy auto parts online. List your own products to sell or buy a new part for your own car.
            </div>
          </div>
          <div className="information--box--second">
            <img className="title--box" src={flag} alt="race flag" />
            <div className="paragraph"> We are working hard to finish the site. Please subscribe with your email address so we can keep you updated on our progress!
            </div>
          </div>
        </div>
      </div>
    )}
  }

  export default Home
