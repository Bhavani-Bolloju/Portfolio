import React, { useEffect, useState } from "react";
import classes from "./CustomCursor.module.scss";

function CustomCursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const updateCursorPosition = function (e) {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // console.log(cursorX);

  return (
    <>
      <div
        className={classes["custom-cursor"]}
        style={{ left: cursorX, top: cursorY }}
      />
      <div
        className={classes["custom-cursor--dot"]}
        style={{ left: cursorX, top: cursorY }}
      />
    </>
  );
}

export default CustomCursor;
