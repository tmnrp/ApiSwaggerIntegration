import "./index.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updatePets } from "./actions";
import Counter from "../counter";
import List from "../list";

// context
export const CounterContext = React.createContext(null);
const AVAILABLE = "available";
const PENDING = "pending";
const SOLD = "sold";
const states = {
  AVAILABLE: AVAILABLE,
  PENDING: PENDING,
  SOLD: SOLD
};

const PetStore = (props) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(states.AVAILABLE);
  const [isUnique, setIsUnique] = useState(true);
  //
  useEffect(() => {
    props.updatePets(state, isUnique);
  }, [state]);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div id="ps">
        <div className="ps-wrap">
          <div className="ps-title pink">Pet Store</div>
          <div className="ps-state">
            <select
              name="state"
              className="select"
              value={state.toLowerCase()}
              onChange={(e) => setState(e.currentTarget.value)}
            >
              {getDefaultState()}
            </select>
          </div>
          <div className="ps-desc">
            Pets are happiness? Share your love. Smash up the counter by
            clicking on the pets. Thank you
          </div>
          <Counter />
          <hr />
        </div>
        <List data={props.pets} />
      </div>
    </CounterContext.Provider>
  );
};

const getDefaultState = () => {
  return Object.keys(states).map((state) => {
    return (
      <option key={state} value={state.toLowerCase()}>
        {state}
      </option>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    pets: state.pets
  };
};
const mapActionToProps = () => {
  return {
    updatePets: updatePets
  };
};

export default connect(mapStateToProps, mapActionToProps())(PetStore);
