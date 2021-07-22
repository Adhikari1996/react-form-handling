export default function Validate(values) {
  let errors = {}
  if (!values.username) {
    errors.username = 'Please enter your name'
  }
  if (!values.email) {
    errors.email = 'Please enter your email'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Please enter your password'
  } else if (values.password.length < 10) {
    errors.password = 'Password must be 10 character'
  }
  return errors
}
