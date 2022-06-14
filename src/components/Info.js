import React from "react";

export default function Info(person) {
  let altText = `photo of ${person.fullName}`;
  return (
    <div className="card-info">
      <div className="card-image-container">
        <img src={require(`../images/${person.image}.png`)} alt={altText} />
      </div>
      <div className="card-header">
        <h4 className="card-name">{person.fullName}</h4>
        <h4 className="card-role">{person.role}</h4>
        <h4 className="card-website">{person.website}</h4>
      </div>
      <div className="button-container">
        <button className="btn btn-email">
          <span className="btn-logo">
            <img src={require(`../images/email.png`)} alt="email logo" />
          </span>
          Email
        </button>
        <button className="btn btn-linkedin">
          <span className="btn-logo">
            <img src={require(`../images/linkedin.png`)} alt="LinkedIn logo" />
          </span>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
