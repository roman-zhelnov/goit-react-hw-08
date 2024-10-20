import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const dispatch = useDispatch();

  const numberReg = /^(\d[-\d]*){3,}$/;
  const nameReg = /^[a-zA-Z]+$/;

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "At least 3 characters")
      .max(50, "No more than 50 characters")
      .matches(nameReg, "Incorrect name")
      .required(),
    number: Yup.string()
      .min(3, "At least 3 characters")
      .max(50, "No more than 50 characters")
      .matches(numberReg, "Incorrect phone number")
      .required(),
  });

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name="name"
              className="input input-bordered border-2 border-black w-full max-w-xs"
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              name="number"
              className="input input-bordered border-2 border-black w-full max-w-xs"
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit" className="btn btn-outline">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
