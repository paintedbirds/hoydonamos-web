import UnderlinedTitle from 'components/UnderlinedTitle';
import Form from './CreateForm';

const CreateDonation = () => (
  <section>
    <div className="px-6">
      <div className="mt-11 text-4xl">
        <UnderlinedTitle>
          <h3>Crear donación</h3>
        </UnderlinedTitle>
      </div>
      <Form />
    </div>
  </section>
);

export default CreateDonation;
