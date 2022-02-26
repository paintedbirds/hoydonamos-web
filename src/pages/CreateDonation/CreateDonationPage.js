import { useCallback } from 'react';

import { CreateDonationForm, useCreateDonation } from 'features/donations';
import { MainLayout, UnderlinedTitle } from 'features/common';
import { handleErrors } from 'helpers/errors';

const CreateDonationPage = () => {
  const { mutate, isLoading } = useCreateDonation();

  const onSubmit = useCallback(
    (setErrors) => (values) => {
      const formData = new FormData();

      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('image', values.image[0]);

      mutate(formData, {
        onError: (errors) => handleErrors(errors, setErrors),
      });
    },
    [mutate]
  );

  return (
    <MainLayout>
      <section>
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Crear donación</h3>
            </UnderlinedTitle>
          </div>
          <CreateDonationForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      </section>
    </MainLayout>
  );
};

export default CreateDonationPage;
