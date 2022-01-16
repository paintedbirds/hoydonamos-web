import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const EditableField = ({ placeholder, name, type, ...leftOverProps }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(placeholder);

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = errors[name];
  const formValue = watch(name, value);

  const onBlur = () => {
    setIsEditing(false);
  };

  const onClick = () => {
    setIsEditing(true);
  };

  const elements = {
    title: <h1 className={styles['editable-field__type-title']}>{value}</h1>,
    paragraph: <p>{value}</p>,
  };

  const inputProps = {
    name,
    id: name,
    className: styles[`editable-field__type-${type}`],
    autoFocus: true,
    ...register(name),
    ...leftOverProps,
  };

  const inputElements = {
    title: <input {...inputProps} />,
    paragraph: <textarea {...inputProps} />,
  };

  useEffect(() => {
    if (formValue) setValue(formValue);
  }, [formValue]);

  return (
    <div onClick={onClick} onBlur={onBlur} aria-hidden="true" role="button">
      {isEditing ? inputElements[type] : elements[type]}
      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

EditableField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['title', 'paragraph']).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default EditableField;
