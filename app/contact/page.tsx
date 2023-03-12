"use client";
import React, { useState, useRef } from "react";

interface IFormData {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

export default function ContactPage() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState<IFormData>({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasBeenSubmitted(false);
    const errors = handleValidation(formData);
    const allErrorsAreEmpty = Object.values(errors).every((value: string) => {
      if (value === "") {
        return true;
      }
    });
    if (allErrorsAreEmpty) {
      console.log("Your Form Data: ", formData);
      setHasBeenSubmitted(true);
      setTimeout(() => {
        setHasBeenSubmitted(false);
      }, 3000);
      setFormErrors({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    } else {
      setFormErrors(errors);
    }
  }

  function handleValidation(formData: IFormData) {
    const errors: IFormData = {
      fullName: "",
      subject: "",
      email: "",
      body: "",
    };
    const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (formData.fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }
    if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }
    if (!RegexEmail.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (formData.body.trim().length < 3) {
      errors.body = "Body must be at least 3 characters";
    }
    return errors;
  }

  if (hasBeenSubmitted)
    return (
      <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2">
        Thank you for your message! <br /> Check the console
      </h1>
    );
  return (
    <div className="mt-28 mb-48">
      <h1>Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[95%] max-w-[400px] mx-auto p-4 space-y-3 rounded-md border border-secondary dark:border-primary shadow-xl"
      >
        <div className="flex flex-col">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`p-2 border rounded-md focus:outline outline-thirdClrDark dark:outline-thirdClr shadow-xl ${
              formErrors.fullName
                ? "border-red-500 dark:border-red-500"
                : "border border-secondary dark:border-primary"
            }`}
            required
          />
          {formErrors.fullName && <p>{formErrors.fullName}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`p-2 border rounded-md focus:outline outline-thirdClrDark dark:outline-thirdClr shadow-xl ${
              formErrors.subject
                ? "border-red-500 dark:border-red-500"
                : "border border-secondary dark:border-primary"
            }`}
            required
          />
          {formErrors.subject && <p>{formErrors.subject}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border rounded-md focus:outline outline-thirdClrDark dark:outline-thirdClr shadow-xl ${
              formErrors.email
                ? "border-red-500 dark:border-red-500"
                : "border border-secondary dark:border-primary"
            }`}
            required
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            ref={textAreaRef}
            className={`min-h-[150px] p-2 border rounded-md focus:outline outline-thirdClrDark dark:outline-thirdClr shadow-xl ${
              formErrors.body
                ? "border-red-500 dark:border-red-500"
                : "border border-secondary dark:border-primary"
            }`}
            required
          />
          {formErrors.body && <p>{formErrors.body}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center p-2 rounded-md border border-2 border-thirdClrDark dark:border-thirdClr shadow-xl hover:bg-secondary hover:text-primary hover:dark:bg-primary hover:dark:text-secondary duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
