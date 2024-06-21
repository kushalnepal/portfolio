import React, { useState, useEffect } from "react";
import "./Dashboard.component.css";
import { Button } from "../Button/Button.Component";

const defaultForm = {
  name: "",
  email: "",
  contactno: "",
};

const Dashboard = () => {
  const [data, setData] = useState({ ...defaultForm });
  const [error, setError] = useState({ ...defaultForm });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const errorMessages = Object.values(error).filter((err) => err);
    setIsValidForm(errorMessages.length === 0);
  }, [error]);

  const isValidFormHandler = (fieldName) => {
    let errMsg;
    switch (fieldName) {
      case "name":
        errMsg = data[fieldName]
          ? data[fieldName].length > 6
            ? ""
            : "There must be 6 characters"
          : "Required field";
        break;
      case "email":
        errMsg = data[fieldName]
          ? data[fieldName].includes("@") && data[fieldName].includes(".com")
            ? ""
            : "Invalid email"
          : "Required field";
        break;
      default:
        break;
    }

    setError((prevError) => ({
      ...prevError,
      [fieldName]: errMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  };

  useEffect(() => {
    isValidFormHandler("name");
    isValidFormHandler("email");
  }, [data]);

  return (
    <div onSubmit={handleSubmit}>
      <div>
        <div className="initial">{/* hi! I am kushal. */}</div>
        <div className="initial-img">
          {/* <img src="" alt="wallpapper"></img> */}
        </div>
      </div>
      <div className="int">
        <form className="form-group">
          <p>Contact us</p>
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="name"
            placeholder="Name"
          />
          <p className="danger">{error.name}</p>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="email"
            placeholder="Email"
          />
          <p className="danger">{error.email}</p>

          <Button isSubmitting={isSubmitting} isValidForm={!isValidForm} />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
