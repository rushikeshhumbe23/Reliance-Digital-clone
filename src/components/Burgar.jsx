import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import VerticalNav from "./VerticalNav";
function Burgar() {
  const [open, setopen] = useState(true);

  return (
    <>
      {open === true ? (
        <AiOutlineClose className="hamburger" onClick={() => setopen(!open)} />
      ) : (
        <AiOutlineMenu className="hamburger" onClick={() => setopen(!open)} />
      )}
      <VerticalNav open={open} />
    </>
  );
}

export default Burgar;
