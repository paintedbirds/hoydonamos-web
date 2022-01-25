import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { UnderlinedTitle } from 'features/common';
import { CreatePetitionForm, useCreatePetition } from 'features/petitions';
import { handleErrors } from 'helpers/errors';
import MainLayout from 'layouts/MainLayout';

const CreatePetitionPage = () => {
  const history = useHistory();
  const { mutate, isLoading } = useCreatePetition();

  const onSubmit = useCallback(
    (setErrors) => async (values) =>
      mutate(values, {
        onError: (errors) => handleErrors(errors, setErrors),
      }),
    [mutate]
  );

  const onCancel = useCallback(() => {
    history.push('/solicitudes');
  }, [history]);

  return (
    <MainLayout>
      <section>
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Crear solicitud</h3>
            </UnderlinedTitle>
          </div>
          <CreatePetitionForm
            isLoading={isLoading}
            onCancel={onCancel}
            onSubmit={onSubmit}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default CreatePetitionPage;
