import { GiSmartphone } from "react-icons/gi";
import { SlUser } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className="min-w-80 flex p-5 gap-5 justify-between border-2 border-black rounded-lg">
      <div className="flex flex-col">
        <p className="flex flex-row gap-1 text-xl">
          <SlUser />
          {name}
        </p>
        <p className="flex flex-row gap-1 text-xl">
          <GiSmartphone /> {number}
        </p>
      </div>
      <button
        className="btn btn-outline"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
