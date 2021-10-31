import { memo } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Timer = memo(({ time, name }) => {
  return <span className={`time ${name}`}>{time}</span>;
});

const Countdown = ({ className }) => {
  const { hour, min, sec, milliSec } = useSelector((state) => state.counter);

  return (
    <div className={className}>
      <h3 className="countdown-header">下次抽獎倒數</h3>
      <div className="countdown">
        <Timer time={hour} name={"hour"} />
        <span className="colon">{` : `}</span>
        <Timer time={min} name={"min"} />
        <span className="colon">{` : `}</span>
        <Timer time={sec} name={"sec"} />
        <span className="colon">{` : `}</span>
        <span className="time milli">{milliSec}</span>
      </div>
    </div>
  );
};

export default styled(Countdown)`
  font-size: 72px;
  padding: 20px;
  color: rgb(59, 59, 59);
  background-color: #01fea9;
  .countdown-header {
    font-size: 30px;
    margin: 0 0 20px 0;
  }
  @media (max-width: 767px) {
    font-size: 14vw;
    padding: 6.25vw;
    .countdown-header {
      font-size: 6.25vw;
      margin-bottom: 6.25vw;
    }
  }
`;
