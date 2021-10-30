import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { TICK, STOP_TIMER, LOTTORY, OPEN_DIALOG } from "redux/actionTypes";
import CandidateList from "views/main/CandidateList";
import Dialog from "views/Dialog";
import Control from "views/main/Control";
import Countdown from "views/main/Countdown";

let interval;
const Home = ({ className }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.counter);
  const { winner } = useSelector((state) => state.candidate);

  useEffect(() => {
    if ("start" === status) {
      clearInterval(interval);
      startTimer();
    }
    if ("paused" === status) {
      stopTimer();
    }
    if ("lottory" === status) {
      //stopTimer();
      dispatch({ type: LOTTORY });
      dispatch({ type: OPEN_DIALOG });
    }
  }, [status]);

  const tick = () => {
    dispatch({ type: TICK });
  };

  const startTimer = () => {
    interval = setInterval(tick, 100);
  };
  const stopTimer = () => {
    clearInterval(interval);
    dispatch({ type: STOP_TIMER });
  };

  return (
    <div className={className}>
      <Control />
      <Countdown />
      <CandidateList />
      <Dialog data={winner} />
    </div>
  );
};

export default styled(Home)`
  max-width: 768px;
  margin: 0 auto;
`;
