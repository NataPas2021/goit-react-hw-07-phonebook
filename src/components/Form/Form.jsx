import { useState, useMemo } from 'react';
import {nanoid} from 'nanoid';
import css from './Form.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';


const INITIAL_STATE = {
  name: "",
  number: "",
};

const Form  = () => {
  const [state, setState] = useState({...INITIAL_STATE});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setState({
        ...state,
        [name]: value,
    })
 }

  const handleSubmit = (e, data) => { 
    e.preventDefault();
    dispatch(addContact(state));
    reset();
    
};

  const reset = () => {
    setState({...INITIAL_STATE});
}

  const inputNameId = useMemo(() => nanoid(), []);
  const inputNumberId = useMemo(() => nanoid(), []);

  return (
         <form onSubmit={handleSubmit}>
            <label htmlFor={inputNameId} className={css.label}>Name</label>
            <input className={css.input}
                 type="text"
                 name="name"
                 value={state.name}
                 id={inputNameId}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
            />
            
            <label htmlFor={inputNumberId} className={css.label}>Phone</label>
            <input className={css.input}
                 type="tel"
                 name="number"
                 value={state.number}
                 id={inputNumberId}
                 onChange={handleChange}
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
            />
           
            <button type="submit" className={css.addButton}>Add contact</button>
        </form>
            );
}

export default Form;
