import { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as Close } from 'assets/close.svg';
import { Loading, MainLayout, Modal, useClickAway } from 'features/common';
import {
  Donation,
  DonationRequestForm,
  useDonation,
  useCreateDonationRequest,
} from 'features/donations';
import { handleErrors } from 'helpers/errors';

import styles from './DonationPage.module.scss';

const DonationPage = () => {
  const { id } = useParams();

  const { status, data } = useDonation({ id });
  const { mutate, isLoading } = useCreateDonationRequest();

  const modalRef = useRef();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  const onDonationRequestSubmit = useCallback(
    (setErrors) => async (values) => {
      await mutate(
        { donationId: id, reason: values },
        { onError: (error) => handleErrors(error, setErrors) }
      );
    },
    [id, mutate]
  );

  useClickAway(modalRef, onCloseModal);

  return (
    <MainLayout>
      <section>
        {status === 'loading' && (
          <div className="my-11 w-full flex justify-center items-center">
            <Loading />
          </div>
        )}
        {status === 'success' && (
          <>
            <Donation data={data} onOpenModal={onOpenModal} />
            {isOpenModal && (
              <Modal ref={modalRef}>
                <div className={styles.close}>
                  <Close onClick={onCloseModal} />
                </div>
                <div className={styles['form-container']}>
                  <p>
                    Nuestros voluntatios analizarán tu solicitud y se
                    contactaran contigo en los proximos días.
                  </p>
                  <DonationRequestForm
                    onSubmit={onDonationRequestSubmit}
                    isLoading={isLoading}
                  />
                </div>
              </Modal>
            )}
          </>
        )}
        {status === 'error' && (
          <p className="my-11 w-full flex justify-center items-center">
            Ha ocurrido un error al cargar la donación
          </p>
        )}
      </section>
    </MainLayout>
  );
};

export default DonationPage;
