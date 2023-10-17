import { useState } from 'react';
import styles from '../../components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactSlice';
import { getContacts } from 'Redux/selectors';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  console.log(contacts);

  const handleSubmit = e => {
    e.preventDefault();

    if (Array.isArray(contacts)) {
      const contactExists = contacts.some(contact => contact?.name === name);
      console.log(contactExists);
      if (contactExists) {
        window.alert(`${name} is already in your contacts`);
        return;
      }
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Phonebook</h1>
      <label className={styles.label}>
        Name:
        <input
          className={styles.name}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
