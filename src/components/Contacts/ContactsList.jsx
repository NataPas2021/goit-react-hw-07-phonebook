import css from './ContactsList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { selectFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {
const items = useSelector(selectFilteredContacts);

const dispatch = useDispatch();

const elements = items.map(({id, name, number}) => {
      return (
           <li key={id}
               className={css.contact}
              >
             {name}: {number}
             <button type='button'
              className={css.deleteButton}
              onClick={() => dispatch(deleteContact(id))}>Delete
             </button>
           </li>
      )
     })
     

 return (
    <>
    <ul>
       {elements}
    </ul>
    </> 
 )
}


export default ContactsList;

