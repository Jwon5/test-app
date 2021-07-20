import React from "react";

export default function Header(props) {
  return (
    <div>
      <h1>Welcome, {props.fullName}</h1>
    </div>
  );
}
