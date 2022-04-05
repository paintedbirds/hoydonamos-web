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
export const generatePetitionPath = (id) =>
  `${PETITIONS_PATH}?petition_id=${id}`;

export const INSTAGRAM_LINK =
  'https://instagram.com/hoydonamos.uy?utm_medium=copy_link';
export const SUPPORT_EMAIL = 'hoydonamos@gmail.com';
export const PAINTED_BIRDS_LINK =
  'https://www.linkedin.com/company/painted-birds/';

export const BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
};
