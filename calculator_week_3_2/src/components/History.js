export default function History({ records }) {
  if (!records || records.length === 0) return null;
  return (
    <ul className="history">
      {records.map((r, idx) => (
        <li key={idx}>{r}</li>
      ))}
    </ul>
  );
}
