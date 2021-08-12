import React from "react";
import ProconList from "./ProconList";

const List = (props) => {
  return (
    <div className="list">
      <h2>{props.title}</h2>
      <div className="procon-lists">
        <ProconList title={"Pros"} />
        <ProconList title={"Cons"} />
      </div>
    </div>
  );
};

export default List;
