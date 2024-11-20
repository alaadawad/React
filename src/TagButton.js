import "./TagButtonStyle.css";

export default function TagButton({ Title, children }) {
  return (
    <button className="tagButton">
      {Title}
      {children}
    </button>
  );
}
