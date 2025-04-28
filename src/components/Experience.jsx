import { use, useState } from "react";
import "../styles/style.css";

function ExperienceInfo() {
  const [isEdit, setIsEdit] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    title: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;

    setCheckbox(isChecked);
    setInfo((previousInfo) => ({
      ...previousInfo,
      endDate: isChecked ? "Present" : "",
    }));
  };

  return (
    <>
      <h2>Practical Experience</h2>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Company Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="title">Position title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={info.title}
              onChange={handleChange}
              placeholder="Enter position title"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="title">Main responsibilities: </label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={info.responsibilities}
              onChange={handleChange}
              placeholder="Enter main responsibilities"
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
            <label htmlFor="working-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                id="working-checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
              />{" "}
              Still working
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="profile">
          <p>Company name: {info.name}</p>
          <p>Position title: {info.title}</p>
          <p>Main responsibilities: {info.responsibilities}</p>
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

export default ExperienceInfo;
