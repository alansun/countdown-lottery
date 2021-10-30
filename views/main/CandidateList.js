import { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CandidateList = memo(({ className }) => {
  const { candidates } = useSelector((state) => state.candidate);

  return (
    <div className={className}>
      {candidates.map((name) => {
        return (
          <div key={name} className="item">
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
  justify-content: start;
  align-items: center;
  flex-flow: wrap;
  .item {
    font-size: 20px;
    padding: 10px;
    text-align: center;
    &:hover {
      color: white;
      background-color: #fdc6c1;
    }
  }
  .item-img {
    width: 64px;
    height: 64px;
    margin-right: 4px;
  }
`;
