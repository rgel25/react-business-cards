import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Card(data) {
  let person = data.data;
  return (
    <div className="card-container">
      <div className="card">
        <Info
          image={person.image}
          fullName={person.fullName}
          role={person.role}
          website={person.website}
        />
        <About about={person.about} />
        <Interest interests={person.interests} />
        <Footer />
      </div>
    </div>
  );
}
