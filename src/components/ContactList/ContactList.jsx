import {useFetchContactsQuery } from '../../redux/phonebook/phonebook-slice';
import {ContactListItem} from '../ContactiListItem/ContactListItem';
import { useState, useEffect } from 'react';
import  {Spinner} from '../Spinner/Spinner';
import Filter from '../Filter/Filter';
import {Contact} from './ContactList.styles'

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const { data, isFetching } = useFetchContactsQuery();

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const onFilteredContacts = filter => {
    if (filter) {
      const normalizeFilter = filter.toLowerCase();
      const filterValue = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizeFilter),
      );

      setContacts(filterValue);
    } else {
      setContacts(data);
    }
  };
    return (
        <>
            <Filter filter ={onFilteredContacts}/>
                {isFetching && (
                <Spinner size={12} />)}
            <Contact>
                {contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
      </Contact>
        </>
    )
}

