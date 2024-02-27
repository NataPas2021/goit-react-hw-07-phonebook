import axios from "axios";

const contactsInstance = axios.create({
    baseURL: 'https://65db689e3ea883a15291ab88.mockapi.io/api/contacts'
});

export const requestContacts = async () => {
     const response = await contactsInstance.get('/');
     return response.data;
};

export const requestAddContact = async (body) => {
    const response = await contactsInstance.post('/', body);
    return response.data;
}

export const requestDeleteContact = async(id) => {
    const response = await contactsInstance.delete(`/${id}`);
    return response.data;
}

