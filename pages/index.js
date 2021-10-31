import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { clearAllInterval } from "helper/lottery";
import { TICK, STOP_TIMER, LOTTERY, OPEN_DIALOG } from "redux/actionTypes";
import CandidateList from "views/main/CandidateList";
import Dialog from "views/Dialog";
import Control from "views/main/Control";
import Countdown from "views/main/Countdown";

const Home = ({ className }) => {
  let interval;
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.counter);
  const { winner } = useSelector((state) => state.candidate);

  useEffect(() => {
    if ("start" === status) {
      startTimer();
    }
    if ("paused" === status) {
      stopTimer();
    }
    if ("lottery" === status) {
      stopTimer();
      dispatch({ type: LOTTERY });
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
    clearAllInterval();
    dispatch({ type: STOP_TIMER });
  };

  return (
    <div className={className}>
      <Countdown />
      <Control />
      <CandidateList />
      <Dialog data={winner} />
    </div>
  );
};

export default styled(Home)`
  max-width: 768px;
  margin: 0 auto;
`;
