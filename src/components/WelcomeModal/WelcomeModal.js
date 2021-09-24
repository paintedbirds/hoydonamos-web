import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import logo from 'assets/logo.svg';
import Form from 'components/Form';
import Modal from 'components/Modal';

const KEY = 'modalShowed';

const persistShowedModal = () => localStorage.setItem(KEY, 'true');

const WelcomeModal = () => {
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);

  const onDonateClick = () => {
    setShowModal(false);

    persistShowedModal();

    history.push('/crear-donacion');
  };

  const onSeeMoreClick = () => {
    setShowModal(false);

    persistShowedModal();
  };

  useEffect(() => {
    setShowModal(!Boolean(localStorage.getItem(KEY)));
  }, []);

  return (
    showModal && (
      <Modal>
        <div>
          <div className="w-20 mx-auto">
            <img alt="Logo" src={logo} />
          </div>
          <h1 className="text-3xl text-center mt-6 px-6 font-bold">
            Che, ¿hoy donamos?
          </h1>
          <p className="mt-6 px-6">
            Both of these can be used to do basically the same thing, but they
            have slightly different use cases. So here are some rules for you to
            consider when deciding which React Hook to use.
          </p>
          <div className="flex flex-col sm:flex-row  gap-x-4">
            <Form.SecondaryButton onClick={onDonateClick}>
              Donar
            </Form.SecondaryButton>
            <Form.Button onClick={onSeeMoreClick}>Conocer mas</Form.Button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default WelcomeModal;
