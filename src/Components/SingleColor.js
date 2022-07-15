import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

import classes from "./SingleColor.module.css";
export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => clearInterval(timeOut);
  }, [alert]);
  return (
    <article
      className={`${classes.color} ${index > 10 && classes.light}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={classes.weight}>{weight}%</p>
      <p className={classes.hexcolor}>{hexValue}</p>
      {alert && <p className={classes.alert}>Copied to clipboard</p>}
    </article>
  );
}
