export default function Post({ title = "no title", body = "no body" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "5px solid teal",
        margin: "25px",
      }}
    >
      <h2>{title}</h2>
      <hr></hr>
      <p>{body}</p>
    </div>
  );
}
