import React, { useState } from "react";

function StudentCard({ name, studentId, major }) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "250px" }}>
      <h2>{name}</h2>
      <p>학번: {studentId}</p>
      <p>전공: {major}</p>
      <button onClick={() => setLikeCount(likeCount + 1)}>좋아요 👍</button>
      <span style={{ marginLeft: "8px" }}>{likeCount}</span>
    </div>
  );
}

export default StudentCard;