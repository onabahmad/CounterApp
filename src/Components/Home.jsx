import React, { useState, useEffect } from "react";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineReload,
} from "react-icons/ai";
import "./Home.css";

const Home = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number < 0) {
    }
  }, []);

  function handleAdd() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  function handleSubstract() {
    setNumber((prevNumber) => prevNumber - 1);
  }
  function handleReset() {
    setNumber(0);
  }
  return (
    <div className="container">
      <div className="box_card">
        <h2>Counter App</h2>
        <div className="counter_number">
          {number < 0 ? (
            <h1 style={{ color: "red" }}>{number}</h1>
          ) : number > 0 ? (
            <h1 style={{ color: "green" }}>{number}</h1>
          ) : (
            <h1>{number}</h1>
          )}
        </div>
        <div className="btn_container">
          <button className="btn_add" onClick={handleAdd}>
            <AiOutlineArrowUp />
            Add
          </button>
          <button className="btn_reset" onClick={handleReset}>
            <AiOutlineReload />
            Reset
          </button>
          <button className="btn_subtract" onClick={handleSubstract}>
            <AiOutlineArrowDown />
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
