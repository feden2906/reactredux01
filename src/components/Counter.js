import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <h1>counter:{counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        reset
      </button>
      <hr />
      <input
        type="number"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />

      <button
        onClick={() => {
          dispatch({ type: "INC_CUSTOM", payload: Number(value) });
        }}
      >
        incustom
      </button>
    </>
  );
};
