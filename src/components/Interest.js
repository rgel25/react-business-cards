import React from "react";

export default function Interest(person) {
  return (
    <div className="card-interests-container">
      <h4 className="card-interests-header">Interests</h4>
      <p className="card-interests">{person.interests}</p>
    </div>
  );
}
