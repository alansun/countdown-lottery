import { memo } from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const Timer = memo(({ time, name }) => {
  return <span className={`time ${name}`}>{time}</span>;
});
// Timer.displayName = "timer";
// Timer.propTypes = {
//   time: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// };
const Countdown = ({ className }) => {
  const { hour, min, sec, milliSec } = useSelector((state) => state.counter);

  return (
    <div className={className}>
      <Timer time={hour} name={"hour"} />
      <span className="colon">{` : `}</span>
      <Timer time={min} name={"min"} />
      <span className="colon">{` : `}</span>
      <Timer time={sec} name={"sec"} />
      <span className="colon">{` : `}</span>
      <span className="time milli">{milliSec}</span>
    </div>
  );
};
// Countdown.propTypes = {
//   campaign: PropTypes.object.isRequired,
//   className: PropTypes.string.isRequired,
// };
export default styled(Countdown)`
  .colon {
    color: rgb(59, 59, 59);
  }
  .time {
    color: white;
    padding: 2px 4px;
    background-color: rgb(59, 59, 59);
    border-radius: 4px;
    &.milli {
      background-color: rgb(247, 66, 47);
    }
  }
`;
