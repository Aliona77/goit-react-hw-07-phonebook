import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
import { useDeleteContactMutation } from '../../redux/phonebook/phonebook-slice';


export  const ContactList = ({ contacts}) => {
   
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

