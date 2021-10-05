import { useForm } from 'react-hook-form';

import Form from 'components/Form';

const CreatePetitionForm = () => {
  const methods = useForm();

  return (
    <Form methods={methods}>
      <Form.Input
        name="subject"
        label="Asunto"
        placeholder="Qué es lo que necesitas?"
      />
      <Form.Textarea
        name="description"
        label="Descripción"
        placeholder="Dejanos mas detalles sobre tu solicitud"
      />
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <Form.SecondaryButton>Cancelar</Form.SecondaryButton>
        <Form.Button>Guardar</Form.Button>
      </div>
    </Form>
  );
};

export default CreatePetitionForm;
