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