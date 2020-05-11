import "./index.scss";
import React, { useContext } from "react";
import { CounterContext } from "../PetStore";
import { MdCheckCircle, MdHighlightOff } from "react-icons/md";

const List = ({ data }) => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="list-container">
      <ul className="list">
        <li className="item header" key="title-id">
          <div className="item-name pink">Name</div>
          <div className="item-status pink">Status</div>
        </li>
        {getList(data, count, setCount)}
      </ul>
    </div>
  );
};

const getList = (data, count, setCount) => {
  return data.map((record, i) => {
    return (
      <li
        className="item bgColor"
        key={`${record.id}${i}`}
        onClick={(e) => onListClick(e, count, setCount)}
      >
        <div className="item-name">{record.name}</div>
        <div className="item-status">
          {record.status === "available" ? (
            <MdCheckCircle className="green" />
          ) : (
            <MdHighlightOff className="red" />
          )}
        </div>
      </li>
    );
  });
};

const onListClick = (e, count, setCount) => {
  setCount(++count);
};

export default List;

/*
{
  "id": 12121,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "TestPetName",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
*/
