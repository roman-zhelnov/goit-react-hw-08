import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const ContactsBook = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">Contacts Book</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading... </h2>}
      {isError && <h2>Something went wrong. Please, try again!</h2>}
      <ContactList />
    </div>
  );
};
export default ContactsBook;
