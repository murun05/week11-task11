import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="app-container">
      <h1>Student Directory</h1>
      <div className="cards-grid">
        <StudentProfileCard
          name="Otgonjargal Murun"
          studentId="202539440"
          major="Computer Engineering"
          year={2}
          gpa={3.85}
        />
        <StudentProfileCard
          name="Anand"
          studentId="202539455"
          major="Computer Engineering"
          year={2}
          gpa={3.80}
        />
        <StudentProfileCard
          name="Lhamaa"
          studentId="202537428"
          major="Computer Engineering"
          year={2}
          gpa={3.75}
        />
      </div>
    </div>
  );
}

export default App;