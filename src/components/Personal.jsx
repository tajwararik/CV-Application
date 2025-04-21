import { useState } from "react";
import "../styles/Personal.css";

function PersonalInfo() {
  const [isEdit, setIsEdit] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  function handleEdit() {
    setIsEdit(true);
  }

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  return (
    <div className="personalInfo">
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="personal-profile">
          <h2>General Information</h2>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
