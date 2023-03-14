import React from "react";

export const ButtonForBanana = ({isNum, setNum, isStraw, AddBannana}) => {
    return (
      <div>
        <p className="f">
          You clicked {isNum + isStraw} times!
        </p>
        <button style={{ background: "yellow" }} className="button" onClick={() => {AddBannana("yellow"); setNum(isNum + 1)}}>
          Click me
        </button>
        <button style={{ background: "blue" }} className="button" onClick={() => {AddBannana("blue"); setNum(isNum + 1)}}>
          Click me
        </button>
      </div>
    );
  }

  export const ButtonForStraw = ({isStraw, setStraw, AddStraw}) => {
  function Handler() {
    setStraw(isStraw + 1)
    AddStraw()
  }

    return (
      <>
        {/* <button className="button3" onClick={() => {AddStraw(); setStraw(isStraw + 1)}}> */}
        <button className="button3" onClick={() => Handler()}>
          Or click me!
        </button>
      </>
    );
  }

 export const Reset = ({setNum, setStraw, setTest}) => {
    return (
      <>
        <button className="button2" onClick={() => {setTest([]); setNum(0); setStraw(0)}}>
          Click to reset
        </button>
      </>
    );
  }