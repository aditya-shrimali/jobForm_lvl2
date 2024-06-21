const validate = (values) => {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email) {
    errors.email = "Email address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid.";
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!/^\d{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number, must be 10 digits.";
  }

  if (
    ["Developer", "Designer"].includes(values.position) &&
    (!values.experience || values.experience <= 0)
  ) {
    errors.experience = "Relevant experience must be greater than 0.";
  }

  if (values.position === "Designer" && !values.portfolioUrl.trim()) {
    errors.portfolioUrl = "Portfolio URL is required for designers.";
  }

  if (values.position === "Manager" && !values.managementExp.trim()) {
    errors.managementExp = "Management experience is required.";
  }

  if (
    Object.keys(values.skills).length === 0 ||
    !Object.values(values.skills).includes(true)
  ) {
    errors.skills = "At least one skill must be selected.";
  }

  if (!values.interviewTime.trim()) {
    errors.interviewTime = "Preferred interview time is required.";
  }

  return errors;
};
export default validate;
