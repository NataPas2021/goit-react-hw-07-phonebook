import * as contactsApi from '../../services/api/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async(_, thunkApi) => {
        try{
            const data = await contactsApi.requestContacts();
            return data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async(id, {rejectWithValue}) => {
        try{
           await contactsApi.requestDeleteContact(id);
           return id;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/add',
    async(body, {rejectWithValue}) => {
        try {
        const data = await contactsApi.requestAddContact(body);
        return data;
        }
        catch(error) {
            return rejectWithValue(error.messsage)
        }
    },
    {
        condition: ({name, number}, {getState}) => {
         const {contacts} = getState();

         const formName = name.toLowerCase();
         const formNumber = number;
      
         const dublicate = contacts.items.find((contact) => {
         return (contact.name === formName && contact.number === formNumber);
          })

        if(dublicate) {
            alert(`${name} with ${number} is elready in contacts!`);
            return false;
        }
        }
    }
)