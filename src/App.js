import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.imageUrl}
        country={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="main">
        <div>{card}</div>
      </div>
    </div>
  );
}

export default App;
