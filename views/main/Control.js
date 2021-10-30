import is from "is_js";
import { memo, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { START_TIMER } from "redux/actionTypes";

const Control = memo(({ className }) => {
  const dispatch = useDispatch();
  const countTimeRef = useRef(0);

  const setCountDownTime = () => {
    const inputTime = +countTimeRef?.current?.value || null;
    if (!inputTime) return alert("請輸入倒數時間長度");
    if (is.not.number(inputTime)) return alert("請輸入正確數字");
    if (inputTime <= 0) return;

    dispatch({
      type: START_TIMER,
      payload: { mins: +countTimeRef.current.value / 10 },
    });
  };
  console.log("control");
  return (
    <div className={className}>
      <input
        type="number"
        min={0}
        max={999}
        className="input"
        placeholder="請輸入倒數時間長度 (分鐘)"
        ref={countTimeRef}
      />
      <button className="execute" onClick={() => setCountDownTime()}>
        執行
      </button>
    </div>
  );
});

export default styled(Control)`
  .input {
    padding: 10px 16px;
    vertical-align: middle;
    background-color: white;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 4px 0 0 4px;
  }
  .execute {
    color: white;
    padding: 10px 16px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0 4px 4px 0;
    border: 1px solid #007bff;
    background-color: #007bff;
  }
`;
