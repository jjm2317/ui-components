import React, { useState, useEffect } from "react";
import "./style.css";
import Detail from "./Detail";
import dummyData from "./dummyData";

export default function App() {
  const [openedIndex, setOpen] = useState(null);

  const togglePopover = (index) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(openedIndex !== index ? index : null);
  };

  const closeAll = (e) => {
    if (!e.target.matches("p")) setOpen(null);
  };

  useEffect(() => {
    document.body.addEventListener("click", closeAll);
    return () => {
      document.body.removeEventListener("click", closeAll);
    };
  });

  return (
    <div className="wrapper">
      {dummyData.map(({ text, context }, i) => (
        <Detail
          key={`detail${i}`}
          text={text}
          context={context}
          open={openedIndex === i}
          onToggle={togglePopover(i)}
        />
      ))}
    </div>
  );
}
