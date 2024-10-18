import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchContacts} from "./redux/contactsOps.js";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";



function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <br/>
           {loading && !error && <b>Request in progress...</b>}
          <ContactList/>
      </div>
  )
}

export default App
