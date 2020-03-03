export default function validateAuth(values) {
    let errors = {};
    // Email Errors
    if (!values.email) {
      errors.email = 'Required Email';
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    // Password Errors
    if (!values.password) {
      errors.password = 'Required Password'
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    return errors;
  }
