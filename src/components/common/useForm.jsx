import { useState, useEffect } from 'react'

const userData = {
  username: '',
  email: '',
  password: '',
  gender: 'male',
  isAgree: false,
  select: '',
}

const useForm = (callback, Validate) => {
  const [addInfo, setAddInfo] = useState(userData)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = event => {
    // const value =
    //   event.target.type === 'checkbox'
    //     ? event.target.checked
    //     : event.target.value
    // const { name, value } = event.target.value

    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setAddInfo({
      ...addInfo,
      [name]: value,
    })
  }

  const formSubmit = event => {
    event.preventDefault()
    setErrors(Validate(addInfo))
    setIsSubmitting(true)
    event.target.reset()
  }

  const resetInputField = () => {
    setAddInfo('')
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
      resetInputField()
    }
  }, [errors])

  return { addInfo, handleInputChange, formSubmit, errors }
}

export default useForm
