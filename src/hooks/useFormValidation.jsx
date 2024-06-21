import { useState, useEffect } from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("Form is valid: Submitting", values);
        // Add any logic here for further processing of the form data.
        setSubmitting(false);
      } else {
        console.log("Form is invalid: Errors", errors);
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setValues((prev) => ({
        ...prev,
        skills: { ...prev.skills, [name]: checked },
      }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return { handleChange, handleSubmit, values, errors, isSubmitting };
};

export default useFormValidation;
