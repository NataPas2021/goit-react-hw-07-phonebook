import { useEffect } from 'react';
import Form from '../Form/Form';
import ContactsList from '../Contacts/ContactsList';
import Filter from '../Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';


const MyContacts = () => { 
  const contacts = useSelector(selectAllContacts);
  console.log(contacts);
  const {items, isLoading, error} = contacts;
  console.log(items)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  
    return (
      <>
         <h1>Phonebook</h1>
         <Form />
         <h2>Contacts</h2>
         <Filter name='filter' />
         {error && <p>{error}</p>}
         {isLoading && <p>...Loading</p>}
         {items.length > 0 && <ContactsList />}
      </>
     );             
 };


export default MyContacts;