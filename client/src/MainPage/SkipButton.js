import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SkipButton = () => {
  // ! UNCOMMENT CODE BELOW TO ALLOW THE STATE TO RESET TO 0 FOR DEVELOPMENT PURPOSES
  //   let clickCount = 0;
  //   useLocalStorage("clicks", clickCount);
  // ! ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  if (!localStorage.attempts) localStorage.attempts = "0";
  // const [count, setCount] = useState(0);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("clicks"))
  );

  function addToCount() {
    setCount(count + 1);
    localStorage.setItem("clicks", count);
  }

  // ! add function inside the return at the bottom, to return the results if the localStorage.clicks === 5
  // ! if not === 5, continue the game

  //   useEffect(() => {
  //     localStorage.setItem("clicks", count + 1);
  //   });

  //   function handleClick(evt) {
  //     evt.preventDefault();
  //     // setCount((count) => count + 1);
  //     localStorage.getItem("clicks");
  //     localStorage.setItem(
  //       "clicks",
  //       setCount((count) => count + 1)
  //     );
  //   }
  return (
    <div>
      {/* <button className="skip-button" onClick={() => setCount(count + 1)}> */}
      <button className="skip-button" onClick={addToCount}>
        <span className="button-text">
          {" "}
          <b>SKIP</b>
        </span>
      </button>
    </div>
  );
};

export default SkipButton;
