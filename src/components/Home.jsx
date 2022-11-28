import React, { useState } from "react";
import Service from "../components/Service";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div>
      <h1>Services we offer</h1>
      <Service />
    </div>
  );
}

export default Home;
