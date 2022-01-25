import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from 'assets/logo.svg';
import { Form, Modal } from 'features/common';

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
    setShowModal(!localStorage.getItem(KEY));
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
            <strong>¡Bienvenido!</strong> Somos una plataforma que busca
            conectar a las personas dentro de la comunidad, para que puedan
            ayudarse mutuamente. Nuestro objetivo es facilitarte el proceso de
            concretar una donación a futuras personas{' '}
            <strong>
              ¡Esperamos que saques el mayor provecho de esta increíble red!
            </strong>
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

export { WelcomeModal };
