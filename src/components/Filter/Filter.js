import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/FilterSlice';

export function Filter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    const inputValue = e.target.value;
    if (typeof inputValue === 'string') {
      dispatch(setFilter(inputValue));
    } else {
      console.error('Input value is not a string:', inputValue);
    }
  };

  return (
    <div>
      <label className={styles.label}>
        Filter contacts by name:
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </div>
  );
}
