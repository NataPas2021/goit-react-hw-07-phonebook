export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
    const {contacts, filter} = store;
    const {items} = contacts;
    if(!filter) {
        return items;
      }
      const normalizedFilter = filter.toLowerCase();

       const filteredContacts = contacts.items.filter(({ name, number }) => {
        const normalizedName = name.toLowerCase();

        return (number.includes(normalizedFilter) || normalizedName.includes(normalizedFilter))
    });

    return filteredContacts;
};