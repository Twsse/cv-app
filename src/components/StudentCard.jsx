export default function StudentCard({ name, role, img }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", width: "200px" }}>
      <img src={img} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
