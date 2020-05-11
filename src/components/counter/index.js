import "./index.scss";
import React, { useContext } from "react";
import { CounterContext } from "../PetStore";
import { MdFavorite, MdSentimentDissatisfied } from "react-icons/md";

const Counter = () => {
  const { count } = useContext(CounterContext);

  return (
    <div id="counter">
      <div className="icon pink">
        <MdFavorite />
      </div>
      <div className="score">
        {count === 0 ? <MdSentimentDissatisfied className="yellow"/> : count}
      </div>
    </div>
  );
};

export default Counter;
