import React from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from '../../Redux/selectors';
import { deleteContact } from 'Redux/operations';
import { Notify } from 'notiflix';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  console.log(contacts);

  const filteredContacts = contacts?.filter(contact => {
    if (!filter) {
      return true;
    }
    if (typeof contact.name === 'string') {
      return contact.name.toLowerCase().trim().includes(filter.toLowerCase());
    } else {
      return false;
    }
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length && filter.toLowerCase()) {
    Notify.warning('No contacts matching your request', {
      position: 'center-center',
    });
  }
  console.log(filteredContacts);

  return (
    <ul>
      {filteredContacts?.map(({ id, name, number }) => (
        <li key={id} className={styles.label}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            onClick={() => handleDelete(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
