import is from "is_js";
import { memo } from "react";
import styled from "styled-components";

import { shuffle } from "helper/lottory";
import candidates from "public/candidates.json";

const CandidateList = memo(({ className }) => {
  if (is.not.array(candidates)) return;
  shuffle(candidates);
  return (
    <div className={className}>
      {candidates.map((name, key) => {
        return (
          <div key={key} className="item">
            <img
              className="item-img"
              alt={name}
              src={`/images/avatar/${name}.png`}
            />
            {name}
          </div>
        );
      })}
    </div>
  );
});

export default styled(CandidateList)`
  width: 200px;
  height: 400px;
  overflow-y: auto;
  .item {
    font-size: 20px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: left;
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
