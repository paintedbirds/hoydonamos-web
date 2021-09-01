export const handleErrors = (errors, setError) => {
  if (errors?.message) {
    setError('general', { message: errors.message });
  }

  if (errors?.errors) {
    Object.keys(errors.errors).forEach((fieldName) => {
      setError(fieldName, {
        message: errors.errors[fieldName][0],
      });
    });
  }
};
