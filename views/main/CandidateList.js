import { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { arrayLottery } from "helper/lottery";

const CandidateList = memo(({ className }) => {
  const { status } = useSelector((state) => state.counter);
  const { candidates } = useSelector((state) => state.candidate);
  const randomIndex = arrayLottery(candidates);
  let randomName = "";
  if ("tick" === status) randomName = candidates[randomIndex];

  return (
    <div className={className}>
      {candidates.map((name) => {
        return (
          <div
            key={name}
            className={`item ${randomName === name ? "pickup" : ""}`}
          >
            <img className="item-img" src={`/images/avatar/${name}.png`} />
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
});

export default styled(CandidateList)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #b9b9b9;
  .item {
    font-size: 20px;
    padding: 10px;
    text-align: center;
    &.pickup {
      color: white;
      background-color: #fdc6c1;
    }
  }
  .item-img {
    width: 64px;
    height: 64px;
    margin-right: 4px;
  }
  @media (max-width: 767px) {
    .item {
      font-size: 4.27vw;
      padding: 1.625vw;
      text-align: center;
      &.pickup {
        color: white;
        background-color: #fdc6c1;
      }
    }
    .item-img {
      width: 20vw;
      height: 20vw;
    }
  }
`;
