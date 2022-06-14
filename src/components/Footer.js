import React from "react";

export default function Footer() {
  return (
    <div className="card-footer">
      <img src={require(`../images/twitter.png`)} alt="twitter icon" />
      <img src={require(`../images/facebook.png`)} alt="facebook icon" />
      <img src={require(`../images/instagram.png`)} alt="instagram icon" />
      <img src={require(`../images/github.png`)} alt="github icon" />
    </div>
  );
}
