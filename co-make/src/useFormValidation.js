// New reusable custom hook that will take care of the form validation
// All of our logic is within our hook
import React from "react";

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  };

  return { 
    handleSubmit, 
    handleChange, 
    handleBlur, 
    values, 
    errors, 
    isSubmitting 
  };
}

export default useFormValidation;