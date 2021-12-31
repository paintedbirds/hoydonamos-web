export const ACCOUNT_PATH = '/mi-cuenta';
export const CREATE_DONATION_PATH = '/crear-donacion';
export const CREATE_PETITION_PATH = '/crear-solicitud';
export const DONATIONS_PATH = '/donaciones';
export const DONATION_PATH = '/donaciones/:id';
export const HOME_PATH = '/';
export const PETITIONS_PATH = '/solicitudes';
export const SIGN_IN_PATH = '/iniciar-sesion';
export const SIGN_UP_PATH = '/registro';
export const UPDATE_ACCOUNT_PATH = '/editar-cuenta';

export const generateDonationPath = (id) => `${DONATIONS_PATH}/${id}`;
