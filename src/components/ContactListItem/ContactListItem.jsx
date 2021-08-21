import { ContactItem, ButtonDelete} from '../ContactList/ContactList.styles';
import { useDeleteContactMutation } from '../../redux/phonebook/phonebook-slice';


export const ContactListItem = (id) =>{
  const [deleteContact, { isloading: isDeleting }] = useDeleteContactMutation();
    return(
      <ContactItem>
             <ButtonDelete type="button" onClick={() => deleteContact(id)}>
             {isDeleting ? 'Deleting...' : 'Delete'}</ButtonDelete>
            </ContactItem>
        
    )
}

  



//=========REDUX==================

//  const onFilteredContacts = (contacts, filter) => {
//      const normalizedFilter = filter.toLowerCase()
//     return contacts.filter(({contact}) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
// };
  

// const mapStateToPropes = ({ contacts: { items, filter } }) => ({
//     contacts: onFilteredContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//  onDeleteContact:(id)=>dispatch(actions.deleteContact(id)),
// });


//export default connect(mapStateToPropes, mapDispatchToProps)(ContactList );


