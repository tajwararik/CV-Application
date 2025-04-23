import { useState } from "react";
import "../styles/style.css";

function EducationalInfo() {
  const [isEdit, setIsEdit] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
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
    <>
      <h2>Educational Experience</h2>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">School Name: </label>
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
            <label htmlFor="title">Title of study: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={info.title}
              onChange={handleChange}
              placeholder="Enter the title"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="start-date">Date of start: </label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              value={info.startDate}
              onChange={handleChange}
              placeholder="Enter the date"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="end-date">Date of end: </label>
            <input
              type="date"
              id="end-date"
              name="endDate"
              value={info.endDate}
              onChange={handleChange}
              placeholder="Enter the date"
            />
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="profile">
          <p>Name: {info.name}</p>
          <p>Tile of study: {info.title}</p>
          <p>Date of start: {info.startDate}</p>
          <p>Date of end: {info.endDate}</p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </>
  );
}

export default EducationalInfo;
