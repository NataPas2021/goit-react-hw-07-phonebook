import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./contacts-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
}

const pending = (state) => (
  {...state,
   isLoading: true});

const rejected = (state, {payload}) => (
  {...state,
    error: payload});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchContactsLoading: (state) => ({...state, isLoading: true}),
        fetchContactsSuccess: (state, {payload}) => ({...state, isLoading: false, items: payload}), 
        fetchContactsError: (state, {payload}) => ({...state, isLoading:false, error: payload}),

        addContactLoading: (state) => ({...state, isLoading: true, error: null}),
        addContactSuccess: (state, {payload}) => ({...state, isLoading: false, items: [...state.items, payload]}),
        addContactError: (state, {payload}) => ({...state, isLoading: false, error: payload}),
        
        deleteContactLoading: (state) => ({...state, isLoading: true, error: null}),
        deleteContactSuccess: (state, {payload}) => ({...state, isLoading: false, items: state.items.filter((item) => item.id !== payload)}),
        deleteContactError: (state, {payload}) => ({...state, isLoading: false, error: payload}),
    },
    extraReducers: builder => {
      builder
       .addCase(fetchContacts.pending, pending)
       .addCase(fetchContacts.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: payload}))

       .addCase(addContact.pending, pending)
       .addCase(addContact.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: [...state.items, payload]}))
       .addCase(fetchContacts.rejected, rejected)

       .addCase(deleteContact.pending, pending)
       .addCase(deleteContact.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: state.items.filter((item) => item.id !== payload)}))
       .addCase(deleteContact.rejected, rejected)
    }
  })

export default contactsSlice.reducer;