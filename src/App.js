import React, { useState } from "react";
import Header from "./Home/header";
import Content from "./Home/content";

function App() {
  const [Login, setLogin] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const InputDisplay = () => {
    setInputOpen((inputOpen) => !inputOpen);
    console.log("app", inputOpen);
  };
  return (
    <>
      <Header inputOpen={inputOpen} InputDisplay={InputDisplay} />
      <Content Login={Login} inputOpen={inputOpen} />
    </>
  );
}

export default App;
