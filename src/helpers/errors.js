const generalResponseError = 'The given data was invalid.';
const translatedGeneralError = 'Los datos proporcionados son inválidos.';

export const handleErrors = (errors, setError) => {
  if (errors?.message) {
    setError('general', {
      message:
        errors.message === generalResponseError
          ? translatedGeneralError
          : errors.message,
    });
  }

  if (errors?.errors) {
    Object.keys(errors.errors).forEach((fieldName) => {
      setError(fieldName, {
        message: errors.errors[fieldName][0],
      });
    });
  }
};
