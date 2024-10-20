import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="flex flex-row gap-5 flex-wrap">
      {contacts.map((item) => (
        <Contact key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ContactList;
