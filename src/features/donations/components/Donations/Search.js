import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from 'assets/search.svg';

import styles from './Donations.module.scss';

const Search = ({ query, setQuery }) => {
  const [queryValue, setQueryValue] = useState(query);

  const onChange = ({ target }) => {
    setQueryValue(target.value.trim());
  };

  const onSearch = () => setQuery(queryValue);

  return (
    <div className="mx-auto max-w-4xl flex items-center justify-center px-6 flex-col sm:flex-row mt-11">
      <div className="relative w-full sm:w-5/6 h-full">
        <input
          type="text"
          className={styles.search__input}
          placeholder="Buscar una donacion"
          value={queryValue}
          onChange={onChange}
        />
        <div className="absolute left-5 top-4">
          <SearchIcon className="h-4 w-4" />
        </div>
      </div>
      <button
        className={styles.search__button}
        type="button"
        onClick={onSearch}
      >
        Buscar
      </button>
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Search;
