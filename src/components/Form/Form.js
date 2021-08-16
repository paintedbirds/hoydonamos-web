import PropTypes from 'prop-types';

import FormButton from './Button';
import FormInput from './Input';

const Form = ({ children, onSubmit }) => (
  <form className="mt-6" onSubmit={onSubmit}>
    {children}
  </form>
);

Form.Input = FormInput;
Form.Button = FormButton;

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
