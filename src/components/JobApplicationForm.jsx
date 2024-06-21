// src/JobApplicationForm.js

import { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";
import validateJobApplicationForm from "../hooks/validateForm";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  phoneNumber: "",
  position: "",
  experience: "",
  portfolioUrl: "",
  managementExperience: "",
  skills: {
    JavaScript: false,
    CSS: false,
    Python: false,
    Java: false,
  },
  interviewTime: "2024-06-25T15:00",
};

const JobApplicationForm = () => {
  const [show, setShow] = useState(false);
  const { handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateJobApplicationForm
  );

  const { position, skills } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("jobApplicationForm");
    formElement.classList.add("fade-out");
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Job Application Form
      </h1>
      {!show ? (
        <form
          onSubmit={handleSubmit}
          id="jobApplicationForm"
          className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={values.fullName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic">{errors.fullName}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone Number:
              </label>
              <input
                type="number"
                name="phoneNumber"
                required
                value={values.phoneNumber}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs italic">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Applying for Position:
              </label>
              <select
                name="position"
                value={values.position}
                onChange={handleChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
              >
                {" "}
                <option value="">Select a position</option>{" "}
                <option value="Developer">Developer</option>{" "}
                <option value="Designer">Designer</option>{" "}
                <option value="Manager">Manager</option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
          {(position === "Developer" || position === "Designer") && (
            <div className="flex flex-wrap -mx-3 mb-6">
              {" "}
              <div className="w-full px-3">
                {" "}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {" "}
                  Relevant Experience (years):{" "}
                </label>{" "}
                <input
                  type="number"
                  name="experience"
                  value={values.experience}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />{" "}
                {errors.experience && (
                  <p className="text-red-500 text-xs italic">
                    {errors.experience}
                  </p>
                )}{" "}
              </div>{" "}
            </div>
          )}{" "}
          {position === "Designer" && (
            <div className="flex flex-wrap -mx-3 mb-6">
              {" "}
              <div className="w-full px-3">
                {" "}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {" "}
                  Portfolio URL:{" "}
                </label>{" "}
                <input
                  type="text"
                  name="portfolioUrl"
                  value={values.portfolioUrl}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />{" "}
                {errors.portfolioUrl && (
                  <p className="text-red-500 text-xs italic">
                    {errors.portfolioUrl}
                  </p>
                )}{" "}
              </div>{" "}
            </div>
          )}{" "}
          {position === "Manager" && (
            <div className="flex flex-wrap -mx-3 mb-6">
              {" "}
              <div className="w-full px-3">
                {" "}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {" "}
                  Management Experience:{" "}
                </label>{" "}
                <input
                  type="text"
                  name="managementExperience"
                  value={values.managementExperience}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                />{" "}
                {errors.managementExperience && (
                  <p className="text-red-500 text-xs italic">
                    {errors.managementExperience}
                  </p>
                )}{" "}
              </div>{" "}
            </div>
          )}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Additional Skills:{" "}
              </label>
              {Object.keys(skills).map((skill) => (
                <div key={skill} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name={skill}
                    checked={skills[skill]}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                  />{" "}
                  <span className="ml-2 text-gray-700">{skill}</span>{" "}
                </div>
              ))}{" "}
              {errors.skills && (
                <p className="text-red-500 text-xs italic">{errors.skills}</p>
              )}{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-wrap -mx-3 mb-6">
            {" "}
            <div className="w-full px-3">
              {" "}
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {" "}
                Preferred Interview Time:{" "}
              </label>{" "}
              <input
                type="datetime-local"
                name="interviewTime"
                value={values.interviewTime}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />{" "}
              {errors.interviewTime && (
                <p className="text-red-500 text-xs italic">
                  {errors.interviewTime}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            // onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          {" "}
          <h2 className="text-2xl font-bold text-center mb-4">
            Form Submitted
          </h2>{" "}
          <p className="text-gray-700">Full Name: {values.fullName}</p>{" "}
          <p className="text-gray-700">Email: {values.email}</p>{" "}
          <p className="text-gray-700">Phone Number: {values.phoneNumber}</p>{" "}
          <p className="text-gray-700">Position: {values.position}</p>{" "}
          {(position === "Developer" || position === "Designer") && (
            <p className="text-gray-700">
              Relevant Experience: {values.experience} years
            </p>
          )}{" "}
          {position === "Designer" && (
            <p className="text-gray-700">
              Portfolio URL: {values.portfolioUrl}
            </p>
          )}{" "}
          {position === "Manager" && (
            <p className="text-gray-700">
              Management Experience: {values.managementExperience}
            </p>
          )}{" "}
          <p className="text-gray-700">
            {" "}
            Skills:{" "}
            {Object.keys(skills)
              .filter((skill) => skills[skill])
              .join(", ")}{" "}
          </p>{" "}
          <p className="text-gray-700">
            Preferred Interview Time: {values.interviewTime}
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
