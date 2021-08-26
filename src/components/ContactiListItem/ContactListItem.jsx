import {  ContactItem, ButtonDelete, Text } from '../ContactList/ContactList.styles'
import { useDeleteContactMutation } from '../../redux/phonebook/phonebook-slice';


export const ContactListItem = ({id, name, number }) => {

    const [deleteContact, { isloading: isDeleting }] = useDeleteContactMutation();
    
    return (
                <ContactItem>
                    <Text>{name}:{number}
                    </Text>
                    <ButtonDelete type="button" onClick={() => deleteContact(id)}>
                        {isDeleting ? 'Deleting...' : 'Delete'}</ButtonDelete>
                </ContactItem>
        
    )
}
