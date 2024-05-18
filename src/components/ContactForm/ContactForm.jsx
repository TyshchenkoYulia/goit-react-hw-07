import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const userName = useId();
  const userNumber = useId();

  const dispatch = useDispatch();

  const handelSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <label className={css.text} htmlFor={userName}>
          Name
        </label>
        <Field className={css.field} name="name" id={userName} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.text} htmlFor={userNumber}>
          Number
        </label>
        <Field className={css.field} name="number" id={userNumber} />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
