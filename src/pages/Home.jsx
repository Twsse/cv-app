import StudentCard from "../components/StudentCard";
import student1 from "../assets/war_festenplatz3.PNG";
import student2 from "../assets/war_festenplatz3.PNG";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StudentCard name="Student 1" role="Frontend Dev" img={student1} />
      <StudentCard name="Student 2" role="Frontend Dev" img={student2} />
    </div>
  );
}
