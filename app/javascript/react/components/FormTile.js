import React from 'react'

const FormTile = props => {
    return(
      <div>
        <label className="form__email--text">
            <input placeholder="Insert Email Here" id="email" className= "form--input" onChange={props.handleChange}/>
        </label>
      </div>
    )
  }

  export default FormTile
