import { useHistory } from 'react-router-dom';

import { Form } from 'features/common';

const ComeBackButton = () => {
  const history = useHistory();

  const onClick = () => history.goBack();

  return <Form.Button onClick={onClick}>Volver atras</Form.Button>;
};

export { ComeBackButton };
