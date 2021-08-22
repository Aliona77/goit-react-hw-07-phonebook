import { useCreateContactMutation, useFetchContactsQuery } from '../../redux/phonebook/phonebook-slice';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'


import { toast } from 'react-hot-toast';
import {Spinner} from '../Spinner/Spinner';


export const ContactForm =() =>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')


  const [createContact, {isLoading}] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  

    
  const  handleChange = event => {
  const { name, value } = event.target;
      
switch(name){
    case "name":
        setName(value);
        break;
    
    case "number":
        setNumber(value);
        break;

    default: return;
      };
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = name.toLowerCase();
    const addContacts = contacts.find(
      contact => contact.name.toLowerCase() === newContact
    );
      
    if ( addContacts) {
      alert(`${name} is already in the contacts.`);
      reset();
      return;
    } 
    createContact({ name, number });
    toast.success('Contact saved', {autoClose: 2000})
    
    reset();
  };
  
    
    const reset = () => {
        setName('');
        setNumber('');
    }

     return (
            <form onSubmit={handleSubmit}>
            <Label>
                <Span>Name</Span>
                    <Input
                        type="text"
                        name="name"
                        placeholder= "Enter name"
                         onChange={handleChange}
                        value={name}
                         id={nameInputId} 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                          
                    />
            </Label>
        
            <Label>
                <Span >Number</Span>
                 <Input
                  type="tel"
                    name="number"
                 placeholder="Enter number"
                  onChange={handleChange}
                    value={number}
                     id={numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                   
                />
                 </Label>
               
          <ButtonAdd type="submit" disabled={isLoading}>
           {isLoading && <Spinner size={12} />}
           ADD CONTACT
          </ButtonAdd>
              </form>
        )
}




  





