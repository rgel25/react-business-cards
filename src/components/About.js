import React from "react";

export default function About(person) {
  return (
    <div className="card-about-container">
      <h4 className="card-about-header">About</h4>
      <p className="card-about">{person.about}</p>
    </div>
  );
}
