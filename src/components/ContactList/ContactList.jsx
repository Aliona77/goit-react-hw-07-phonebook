import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
//import { onFilteredContacts } from '../../redux/phonebook/pnonebook-selector';
import { useDeleteContactMutation } from '../../redux/phonebook/phonebook-slice';


export  const ContactList = ({ contacts}) => {
    // const contacts = useSelector(onFilteredContacts);
   
  const [deleteContact, { isloading: isDeleting }] = useDeleteContactMutation();
    return (
        <Contact>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}>
                    <Text>{contact.name}:{contact.number}
                    </Text>
                    <ButtonDelete type="button" onClick={() => deleteContact(contact.id)}>
                        {isDeleting ? 'Deleting...' : 'Delete'}</ButtonDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}

