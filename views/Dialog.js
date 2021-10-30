import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { CLOSE_DIALOG } from "redux/actionTypes";

const Dialog = ({ className }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.dialog);
  return (
    <div className={`${className} ${isOpen ? "open" : ""}`}>
      <div className="container">
        <div class="header">
          <h3>Modal Title</h3>
          <label onClick={() => dispatch({ type: CLOSE_DIALOG })}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC"
              width="16"
              height="16"
              alt=""
            />
          </label>
        </div>
        <p>Content for the modal</p>
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
    p {
      padding: 15px;
      margin: 0;
    }
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
      &:hover img {
        opacity: 0.6;
      }
    }
  }
`;
