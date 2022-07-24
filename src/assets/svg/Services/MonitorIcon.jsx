import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 508 508"
      version="1.1"
      viewBox="0 0 508 508"
      xmlSpace="preserve"
      width={45} height={42}
    >
      <circle cx="254" cy="254" r="254" fill="#90DFAA"></circle>
      <path
        fill="#FFF"
        d="M254 65.6C150 65.6 65.6 150 65.6 254S150 442.4 254 442.4 442.4 358 442.4 254 358 65.6 254 65.6zm0 326c-76 0-137.6-61.6-137.6-137.6S178 116.4 254 116.4 391.6 178 391.6 254 330 391.6 254 391.6z"
      ></path>
      <path
        fill="#324A5E"
        d="M355.6 187.6L241.6 206.8 332.8 93.6 237.2 96.4 169.6 256.8 245.6 246 188 350.4 167.2 329.6 175.2 399.2 235.6 363.2 210.8 360z"
      ></path>
    </svg>
  );
}

export default SvgComponent;
