import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const drinks = ["Gatorade", "LaCroix", "Water", "Apple Juice", "Yerba"];
const current_year = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <Header fullName="John Won" />
      <Body drinks={drinks} />
      <Footer full_year={current_year} />
    </div>
  );
}

export default App;
