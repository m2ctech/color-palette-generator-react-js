import React, { useState } from "react";
import Values from "values.js";

//css
import classes from "./App.module.css";
import SingleColor from "./SingleColor";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className={classes.container}>
        <h3>
          <span>C</span>olor Generator
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? classes.error : null}`}
            placeholder="#f15025"
          />
          <button className={classes.btn} type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className={classes.colors}>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}
