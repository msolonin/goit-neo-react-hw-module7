import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import {selectFilteredContact} from "../../redux/contactsSlice.js";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContact);
  return (
      filterContacts.map((item) => <Contact key={item.id}
                                      id={item.id}
                                      name={item.name}
                                      number={item.number}/>)
  );
};

export default ContactList;
