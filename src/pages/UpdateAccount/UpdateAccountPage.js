import { useCallback } from 'react';

import { UpdateAccountForm, useUserUpdate, useAuth } from 'features/auth';
import { MainLayout } from 'features/common';
import { handleErrors } from 'helpers/errors';

const UpdateAccountPage = () => {
  const { user } = useAuth();
  const { mutate, isLoading } = useUserUpdate();

  const onSubmit = useCallback(
    (setErrors) => (values) => {
      const formData = new FormData();

      Object.entries(user).forEach((entry) => {
        formData.append(entry[0], entry[1]);
      });

      formData.append('name', values.name);
      formData.append('about_me', values.aboutMe);
      formData.append('phone', values.phone);

      if (values.image.length > 0) {
        formData.append('image', values.image[0]);
      } else {
        formData.delete('image');
      }

      mutate(formData, {
        onError: (errors) => handleErrors(errors, setErrors),
      });
    },
    [mutate, user]
  );

  return (
    <MainLayout>
      <UpdateAccountForm onSubmit={onSubmit} isLoading={isLoading} />
    </MainLayout>
  );
};

export default UpdateAccountPage;
