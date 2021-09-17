import { useParams } from 'react-router-dom';

import Form from 'components/Form';
import Loading from 'components/Loading';
import UnderlinedTitle from 'components/UnderlinedTitle';
import { useDonation } from 'hooks/queries/donation';

import styles from './Donation.module.scss';

const Donation = () => {
  const { id } = useParams();

  const { status, data } = useDonation({ id });

  return (
    <section>
      {status === 'loading' && (
        <div className="my-11 w-full flex justify-center items-center">
          <Loading />
        </div>
      )}
      {status === 'success' && (
        <div className="px-6">
          <div className="mt-11 text-4xl">
            <UnderlinedTitle>
              <h3>Detalle de donación</h3>
            </UnderlinedTitle>
          </div>
          <div className="flex flex-wrap sm:my-16 mt-8">
            <div className="md:w-1/2 w-full md:h-auto">
              <img alt="Donacion" src={data.image} className={styles.image} />
            </div>
            <div className="md:w-1/2 w-full lg:pl-10 lg:mt-0 mt-8">
              <h1 className={styles.title}>{data.name}</h1>
              <p>{data.description}</p>
              <div className="flex">
                <Form.Button>¡Quiero ponerme en contacto!</Form.Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {status === 'error' && (
        <p className="my-11 w-full flex justify-center items-center">
          Ha ocurrido un error al cargar la donación
        </p>
      )}
    </section>
  );
};

export default Donation;
