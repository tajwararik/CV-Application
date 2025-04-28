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
  const [checkbox, setCheckbox] = useState(false);

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

  function handleCheckbox(e) {
    const isChecked = e.target.checked;

    setCheckbox(isChecked);
    setInfo((previousInfo) => ({
      ...previousInfo,
      endDate: isChecked ? "Present" : "",
    }));
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
              placeholder="Enter school name"
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
              placeholder="Enter study title"
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
              disabled={checkbox}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="studying-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                id="studying-checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
              />{" "}
              Still studying
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="profile">
          <p>School name: {info.name}</p>
          <p>Study title: {info.title}</p>
          <p>Start date: {info.startDate}</p>
          <p>End date: {info.endDate}</p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </>
  );
}

export default EducationalInfo;
