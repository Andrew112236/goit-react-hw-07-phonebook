import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from '../../Redux/Filter';
import { selectFilter } from '../../Redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div>
      <label className={styles.label}>
        Filter contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filter;
