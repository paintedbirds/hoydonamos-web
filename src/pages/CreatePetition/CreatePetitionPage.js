import { useCallback } from 'react';

import { MainLayout, UnderlinedTitle } from 'features/common';
import { CreatePetitionForm, useCreatePetition } from 'features/petitions';
import { handleErrors } from 'helpers/errors';

const CreatePetitionPage = () => {
  const { mutate, isLoading } = useCreatePetition();

  const onSubmit = useCallback(
    (setErrors) => async (values) =>
      mutate(values, {
        onError: (errors) => handleErrors(errors, setErrors),
      }),
    [mutate]
  );

  return (
    <MainLayout>
      <section>
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Crear solicitud</h3>
            </UnderlinedTitle>
          </div>
          <CreatePetitionForm isLoading={isLoading} onSubmit={onSubmit} />
        </div>
      </section>
    </MainLayout>
  );
};

export default CreatePetitionPage;
