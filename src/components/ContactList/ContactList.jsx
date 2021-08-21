import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
//import {  useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
//import * as actions from '../../redux/phonebook/phonebook-slice';
//import { onFilteredContacts } from '../../redux/phonebook/pnonebook-selector';
import { useDeleteContactMutation } from '../../redux/phonebook/phonebook-slice';


export  const ContactList = ({ contacts}) => {
    // const contacts = useSelector(onFilteredContacts);
    // const dispatch = useDispatch();
    // const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
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

