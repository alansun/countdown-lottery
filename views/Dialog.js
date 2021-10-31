import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { CLOSE_DIALOG } from "redux/actionTypes";

const Dialog = ({ className, data }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.dialog);
  return (
    <div className={`${className} ${isOpen ? "open" : ""}`}>
      <div className="container">
        <div className="header">
          <h3>恭喜獲獎</h3>
          <label onClick={() => dispatch({ type: CLOSE_DIALOG })}>
            <img className="close" src="/images/close.png" />
          </label>
        </div>
        <div className="content">
          <img className="crown" src={"/images/crown.png"} />
          <img className="avatar" src={data?.image} />
          <div>{data?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default styled(Dialog)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 998;
  &.open {
    display: block;
    .container {
      display: block;
    }
  }

  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: none;
    width: 300px;
    height: 300px;
    background-color: #fff;
    z-index: 999;
  }
  .header {
    background-color: #f9f9f9;
    border-bottom: 1px solid #dddddd;
    height: 50px;
    h3 {
      margin: 0;
      padding-left: 15px;
      line-height: 50px;
      color: #4d4d4d;
      font-size: 16px;
      display: inline-block;
    }
    label {
      border-left: 1px solid #dddddd;
      float: right;
      line-height: 50px;
      padding: 0 15px 0 15px;
      cursor: pointer;
      &:hover .close {
        opacity: 0.6;
      }
      .close {
        width: 16px;
        height: 16px;
      }
    }
  }
  .content {
    padding: 15px;
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
    position: relative;
    .avatar {
      width: 60%;
    }
    .crown {
      width: 20%;
      position: absolute;
      top: 0;
      left: 20%;
      transform: rotate(-20deg);
    }
  }
  @media (max-width: 767px) {
    .container {
      width: 100%;
      height: 80vw;
    }
    .header {
      height: 13vw;
      h3 {
        margin: 0;
        padding-left: 4.266vw;
        line-height: 13vw;
        font-size: 6vw;
      }
      label {
        line-height: 13vw;
        padding: 0 4.266vw 0 4.266vw;
        .close {
          width: 4.266vw;
          height: 4.266vw;
        }
      }
    }
    .content {
      padding: 4.266vw;
      font-size: 8vw;
      font-weight: bolder;
      text-align: center;
      position: relative;
      .avatar {
        width: 50vw;
      }
      .crown {
        width: 15vw;
        position: absolute;
        top: 0;
        left: 20%;
        transform: rotate(-20deg);
      }
    }
  }
`;
