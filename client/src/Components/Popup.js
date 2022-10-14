import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="Popup">
      <button className="Popup-close" onClick={() => props.setTrigger(false)}>
        x
      </button>
      <span>{props.children}</span>
    </div>
  ) : (
    ""
  );
}

export default Popup;
