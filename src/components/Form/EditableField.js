import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const EditableField = ({ defaultValue, name, type, ...leftOverProps }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = errors[name];
  const formValue = watch(name, value);

  const onBlur = (_event) => setIsEditing(false);

  const onClick = (_event) => setIsEditing(true);

  const elements = {
    title: <h1 className={styles['editable-field__type-title']}>{value}</h1>,
    paragraph: <p>{value}</p>,
  };

  const inputProps = {
    name: name,
    id: name,
    className: styles[`editable-field__type-${type}`],
    defaultValue: defaultValue,
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
    <div onBlur={onBlur} onClick={onClick}>
      {isEditing && inputElements[type]}
      {!isEditing && elements[type]}
      {error && <p className={styles.error}>{error?.message}</p>}
    </div>
  );
};

EditableField.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['title', 'paragraph']).isRequired,
};

export default EditableField;
