import React from "react";

export default function Footer({ full_year }) {
  return (
    <div style={{ bottom: "0px", position: "fixed", width: "100vw" }}>
      &copy; {full_year}
    </div>
  );
}
