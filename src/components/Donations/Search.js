import { ReactComponent as SearchIcon } from 'assets/search.svg';

import styles from './Donations.module.scss';

const Search = () => (
  <div className="mx-auto max-w-4xl flex items-center justify-center px-6 flex-col sm:flex-row mt-11">
    <div className="relative w-full sm:w-5/6 h-full">
      <input
        type="search"
        className={styles['search__input']}
        placeholder="Buscar una donacion"
      />
      <div className="absolute left-5 top-4">
        <SearchIcon className="h-4 w-4" />
      </div>
    </div>
    <button className={styles['search__button']}>Buscar</button>
  </div>
);

export default Search;
