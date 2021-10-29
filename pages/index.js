import is from "is_js";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SET_TIME } from "redux/actionTypes";

export default function Home() {
  const intervalRef = useRef(0);
  const countTimeRef = useRef(0);
  const { finish, hour, min, sec, milliSec, status, seconds } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  const setCountDownTime = () => {
    const inputTime = +countTimeRef?.current?.value || null;
    if (!inputTime) return alert("請輸入倒數時間長度");
    if (is.not.number(inputTime)) return alert("請輸入正確數字");
    if (inputTime <= 0) return;

    dispatch({
      type: SET_TIME,
      payload: { mins: +countTimeRef.current.value },
    });
    stopTimer();
  };
  useEffect(() => {
    console.log("status", status);
    if ("set_time" === status) {
      startTimer();
    }
  }, [status]);

  const tick = () => {
    dispatch({
      type: "TICK",
    });

    if (seconds <= 0) {
      stopTimer();
    }
  };

  const startTimer = () => {
    intervalRef.current = setInterval(tick, 100);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    console.log("stop");
    dispatch({
      type: "STOP_TIMER",
    });
  };
  return (
    <div>
      <div>
        <input
          type="number"
          min={0}
          max={999}
          placeholder="請輸入要倒數的時間長度"
          ref={countTimeRef}
        />
        分鐘
      </div>
      <button onClick={() => setCountDownTime()}>執行</button>
      <div>
        Value from store:
        <p>Time: {`${hour}: ${min}: ${sec}: ${milliSec}`}</p>
      </div>
      finish: {finish ? "finish" : ""}
    </div>
  );
}
