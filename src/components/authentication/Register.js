import React from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

//* icons for the password-show toggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


class Register extends React.Component {
state = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
    passwordConfirmation: '',
    selectedVal: ''
  },
  errors: { 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    selectedVal: '' 
  },
  isPasswordRevealed: false
}

//* fhandles all the value inputs for all the fields in the form apart from the drop down menu.
handleChange = event => {
  const formData = { ...this.state.formData, [event.target.name]: event.target.value }
  this.setState({ formData })
}

//* handles the value input for the frop down menu in the form. Had to separate at first, would refactor to make the handleChange function reusable for both.
handleSelect = event => {
  const formData = { ...this.state.formData, selectedVal: event.value }
  this.setState({ formData })
}

//* to toggle the view of the password on and off.
toggleShowPassword = () => {
  this.setState({ isPasswordRevealed: !this.state.isPasswordRevealed })
}

//* checks to make sure every REQUIRED field has a value.
handleValidation = () => {
  const { firstName, lastName, email, password, passwordConfirmation, selectedVal } = this.state.formData

  const errors = { firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '', selectedVal: '' }

  if (!firstName) {
    errors.firstName = 'First name is required'
  } 
  if (!lastName) {
    errors.lastName = 'Last name is required'
  }
  if (!email) {
    errors.email = 'Email is required'
  }
  if (!password) {
    errors.password = 'Password is required'
  }
  if (!passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm your password'
  }
  if (!selectedVal) {
    errors.selectedVal = 'Please choose one'
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match'
  }


  //* if all checks pass the form is submitted and the form refreshed. If not, errors are sent to state and displayed to the user.
  if (firstName && lastName && email && password && passwordConfirmation && selectedVal) {
    const formData = { firstName: '', lastName: '', email: '', number: '', password: '', passwordConfirmation: '', selectedVal: '' }
    this.setState({ formData })
  }
  this.setState({ errors })
}

//* prevents the page from reloading automatically.
//* validation checks are ran before the form is submitted.
handleSubmit = event => {
  event.preventDefault()
  this.handleValidation()
  console.log(this.state.formData)
}


render() {
  const { formData, errors, isPasswordRevealed } = this.state

  //* options for the drop down menu.
  const options = [
    'Search Engine', 'Student Channel', 'Word of Mouth', 'Other'
  ]

  return (
    <section className="section">
      <div className="form">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input className="input"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleChange}
              value={formData.firstName}
            />
            <br></br>
            {errors.firstName && <small className="error-help">{errors.firstName}</small>}
          </div>
          <div className="input-field">
            <input className="input"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleChange}
              value={formData.lastName}
            />
            <br></br>
            {errors.lastName && <small className="error-help">{errors.lastName}</small>}
          </div>
          <div className="input-field">
            <input className="input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={formData.email}
            />
            <br></br>
            {errors.email && <small className="error-help">{errors.email}</small>}
          </div>
          <div className="input-field">
            <input className="input"
              placeholder="Number (optional)"
              name="number"
              onChange={this.handleChange}
              value={formData.number}
            />
          </div>
          <div className="input-field">
            <input className="input"
              placeholder="Password"
              name="password"
              type={isPasswordRevealed ? 'text' : 'password'}
              onChange={this.handleChange}
              value={formData.password}
            />
            <span onClick={this.toggleShowPassword}>
              {isPasswordRevealed ? 
                <FontAwesomeIcon icon={faEye} className="custom-icon" /> :
                <FontAwesomeIcon icon={faEyeSlash} className="custom-icon" />}
            </span>
            <br></br>
            {errors.password && <small className="error-help">{errors.password}</small>}
          </div>
          <div className="input-field">
            <input className="input"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              type={isPasswordRevealed ? 'text' : 'password'}
              onChange={this.handleChange}
              value={formData.passwordConfirmation}
            />
            <br></br>
            {errors.passwordConfirmation && <small className="error-help">{errors.passwordConfirmation}</small>}
          </div>
          <div className="input-field">
            <p>How did you find out about us?</p>
            <Dropdown 
              className="input"
              options={options}
              placeholder="Please select one"
              label="selectedVal"
              value={formData.selectedVal}
              onChange={this.handleSelect}
            />
            <br></br>
            {errors.selectedVal && <small className="error-help">{errors.selectedVal}</small>}
          </div>
          <div className="input-field">
            <button type="submit" className="submit-button">Register</button>
          </div>
        </form>
      </div>
    </section>
  )
}
}

export default Register