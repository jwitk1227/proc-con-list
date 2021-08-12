import { React, useState } from "react";
import ProconListItems from "./ProconListItems";

const ProconList = (props) => {
  const [listItems, setListItems] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setValue("");
    e.preventDefault();
    setListItems([...listItems, value]);
  };

  return (
    <div className="procon-list">
      <h2 className="procon-list__title">{props.title}</h2>
      <ProconListItems items={listItems} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleInput(e)} value={value} />
      </form>
    </div>
  );
};

export default ProconList;
