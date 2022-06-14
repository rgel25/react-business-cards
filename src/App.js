import React from "react";
import data from "./data/data";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="container">
      <Card data={data[0]} />
      <Card data={data[1]} />
      <Card data={data[2]} />
      <Card data={data[3]} />
      <Card data={data[4]} />
      <Card data={data[5]} />
      <Card data={data[6]} />
      <Card data={data[7]} />
    </div>
  );
}

/* <Helmet>
<meta charSet="utf-8" />
<title>React Business Cards</title>
<link rel="canonical" href="http://amiralles-react-business-cards/" />
</Helmet> */
