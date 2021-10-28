import Head from "next/head";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT_COUNT_KEY, UPDATE_PROFILE } from "../redux/actionTypes";
export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { name, email } = useSelector((state) => state.profile);
  const { countKey } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
      </div>
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_PROFILE,
            payload: { name: nameInput, email: emailInput },
          })
        }
      >
        Submit profile
      </button>
      <div>
        Value from store:
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
      <h4>countKey: {countKey}</h4>
      <button onClick={() => dispatch({ type: INCREMENT_COUNT_KEY })}>
        Increment count
      </button>
    </div>
  );
}
