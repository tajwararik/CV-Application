import PersonalInfo from "./components/Personal.jsx";
import EducationalInfo from "./components/Education.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <div className="cv">
        <PersonalInfo />
        <EducationalInfo />
      </div>
    </>
  );
}

export default App;
