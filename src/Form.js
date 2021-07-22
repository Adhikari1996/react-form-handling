import React from 'react'
import useForm from './common/useForm'
import './userLoginForm.css'
import Validate from './validate'

const UserLoginForm = props => {
  const { addInfo, handleInputChange, formSubmit, errors } = useForm(
    userDataSubmit,
    Validate
  )

  function userDataSubmit() {
    window.alert('form submitted sucessfully')
    console.log('form submitted sucessfully...')
  }

  return (
    <div className="UserLogin">
      <h2 style={{ color: 'cadetblue' }}>User Login Form</h2>
      <form onSubmit={formSubmit}>
        <div className="UserForm">
          <label className="label">User Name </label>
          <input
            className={`${'Input'} ${errors.username && 'inputError'}`}
            type="text"
            name="username"
            value={addInfo.username}
            onChange={handleInputChange}
          />
          {errors.username && <span className="errors">{errors.username}</span>}
        </div>
        <div className="UserForm">
          <label className="label">User Email </label>
          <input
            className={`${'Input'} ${errors.email && 'inputError'}`}
            type="text"
            name="email"
            value={addInfo.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="errors">{errors.email}</span>}
        </div>
        <div className="UserForm">
          <label className="label">Password </label>
          <input
            className={`${'Input'} ${errors.password && 'inputError'}`}
            type="password"
            name="password"
            value={addInfo.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="errors">{errors.password}</span>}
        </div>
        <div className="GenderLabel">
          <label className="label">Gender </label>
          <div className="Gender">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleInputChange}
              checked={addInfo.gender === 'male'}
            />
            <label className="label">Male </label>
          </div>
          <div className="Gender">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleInputChange}
              checked={addInfo.gender === 'female'}
            />
            <label className="label">Female </label>
          </div>
          <div className="Gender">
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleInputChange}
              checked={addInfo.gender === 'other'}
            />
            <label className="label">Other </label>
          </div>
        </div>

        <div className="selectForm">
          <label className="label">Select Language</label>
          <select
            className="select"
            name="select"
            value={addInfo.select}
            onChange={handleInputChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="node">Node</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div className="checkbox">
          <label>Are you agree? </label>
          <input
            type="checkbox"
            name="isAgree"
            onChange={handleInputChange}
            checked={addInfo.isAgree}
          />
        </div>
        <button className="Button" type="submit">
          User Login
        </button>
      </form>
    </div>
  )
}

export default UserLoginForm
