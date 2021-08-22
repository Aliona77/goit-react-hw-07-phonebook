import { useFetchContactsQuery } from './redux/phonebook/phonebook-slice'; 
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter.jsx';
import {ContactForm }from './components/ContactForm/ContactForm.jsx';
import {ContactList} from './components/ContactList/ContactList';
import  {Spinner} from './components/Spinner/Spinner';




export const  App=()=>{
  const { data: contacts, isFetching } = useFetchContactsQuery();

    return (
      <Container title="Phonebook">
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter />
        {isFetching && <Spinner/>}
        {contacts  && (
         <ContactList contacts={contacts} />
        )}
      </Container>
    );
  }


