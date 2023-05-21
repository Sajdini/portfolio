"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
const ContactForm = () => {
  const [response, setResponse] = useState("");

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  useEffect(() => {
    if (response) {
      const timeout = setTimeout(() => {
        setResponse("");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [response]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    if (!serviceID || !templateID || !publicKey) {
      throw new Error("One or more environment variables are not defined");
    }
    const templateParams = {
      name: values.name,
      notes: values.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        setResponse("Thank you for your message");
      },
      (err) => {
        setResponse("An error occured, please try again");
      }
    );

    resetForm();
  };

  return (
    <div className="w-full  basis-1/2   ">
      <h2 className="text-amber-400 text-2xl mb-4">
        Any idea in particular? Feel free to write me!
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="space-y-6 w-full border-solid border-amber-400 border-2 p-3 rounded-lg">
            <div className="w-full mb-3">
              <label htmlFor="name" className="block mb-1 text-amber-400">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="form-input w-full p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message "
              />
            </div>

            <div className="w-full">
              <label htmlFor="subject" className="block mb-1 text-amber-400">
                Subject
              </label>
              <Field
                type="text"
                name="subject"
                className="form-input w-full p-2"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="error-message"
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="block mb-1 text-amber-400">
                Message
              </label>
              <Field
                as="textarea"
                rows={6}
                name="message"
                className="form-textarea w-full"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-message"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-amber-400 py-2 px-5 w-[300px]  flex items-start justify-center gap-[10px] "
              >
                <span className="block">Submit</span>
              </button>
              <div>
                <h2
                  className={`text-amber-400 font-medium  ${
                    response.length === 0 ? "hidden" : "block"
                  }`}
                >
                  {response} !
                </h2>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
