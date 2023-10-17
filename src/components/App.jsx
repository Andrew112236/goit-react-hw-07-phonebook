import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../Redux/operations';
import { getIsLoading, getError } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </>
  );
}

export default App;
