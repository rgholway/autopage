import React from 'react'

const FormTile = props => {
    return(
      <div>
        <label className="form__email--text">
          <input placeholder={"Add Email"} id="email" className= "form--text" onChange={props.handleChange}></input>
        </label>
      </div>
    )
  }

  export default FormTile
