"use client";
import React, { useState } from "react";

interface IFormData {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

export default function ContactPage() {
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
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = handleValidation(formData);
    const allErrorsAreEmpty = Object.values(errors).every((value: string) => {
      if (value === "") {
        return true;
      }
    });
    if (allErrorsAreEmpty) {
      console.log(formData);
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

  return (
    <div className="mt-20 px-2">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`border border-secondary dark:border-primary ${
              formErrors.fullName && "border-red-500 dark:border-red-500"
            }`}
            required
          />
          {formErrors.fullName && <p>{formErrors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`border border-secondary dark:border-primary ${
              formErrors.subject && "border-red-500 dark:border-red-500"
            }`}
            required
          />
          {formErrors.subject && <p>{formErrors.subject}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border border-secondary dark:border-primary ${
              formErrors.email && "border-red-500 dark:border-red-500"
            }`}
            required
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className={`border border-secondary dark:border-primary ${
              formErrors.body && "border-red-500 dark:border-red-500"
            }`}
            required
          />
          {formErrors.body && <p>{formErrors.body}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
