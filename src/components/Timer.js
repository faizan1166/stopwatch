import React, { useState, useEffect } from "react";
function Timer() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    document.body.style.background = "black";
    if (start) {
      document.getElementById("textfield1").value = "";
      document.getElementById("textfield2").value = "";
      var time = setInterval(() => {
        if (second !== 0) {
          setSecond(second - 1);
        }
        if (second === 0 && minute !== 0) {
          setMinute(minute - 1);
          setSecond(59);
        }
        if (second <= 0 && minute <= 0 ) {
            setMinute(0)
            setSecond(0)
          setStart(false);
        }  
      }, 1000);
    }
    return () => clearInterval(time);
  });

  function reset() {
    setMinute(0);
    setSecond(0);
    setStart(false);
  }
  function handleStart() {
    if (second !== 0 || minute !== 0) {
      setStart(!start);
    }
  }
  return (
    <>
      <div className="container">
        <h1>STOPWATCH</h1>
        <div className="watch">
          {/* <h1>
            {minute < 10 ? "0" + minute : minute}:
            {second < 10 ? "0" + second : second}
          </h1> */}
          <h1>
            {minute !== 0 ? <>{minute < 10 ? `0${minute}` : minute}</> : "00"}:
            {second !== 0 ? <>{second < 10 ? `0${second}` : second}</> : "00"}
          </h1>
        </div>
        <input
          className="form-control mx-2"
          maxLength="2"
          id="textfield1"
          type="text"
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === "" || re.test(e.target.value))
              setMinute(e.target.value);
          }}
          placeholder="Minutes"
          disabled={start}
        />
        <input
          className="form-control mx-2"
          maxlength="2"
          id="textfield2"
          type="text"
          onChange={(e) => {
            const re = /^[0-9\b]+$/;
            if (e.target.value === "" || re.test(e.target.value))
              setSecond(e.target.value);
          }}
          placeholder="Seconds"
          disabled={start}
        />
        <br />
        <br />
        <button
          className={`btn btn-${!start ? "primary" : "warning"} mx-3`}
          onClick={handleStart}
        >
          {start ? "Stop" : "Start"}
        </button>
        <button className="btn btn-danger mx-2" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
export default Timer;
